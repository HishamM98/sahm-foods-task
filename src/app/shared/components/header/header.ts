import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  HostListener,
  OnInit,
  computed,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TranslatePipe } from '@ngx-translate/core';
import { KitchenApiService } from '../../../core/api/kitchen-api.service';
import { ConnectivityService } from '../../../core/services/connectivity.service';
import { I18nService } from '../../../core/services/i18n.service';
import { KitchenLoadLevel, ProductDto } from '../../../core/models/api.types';
import { catchError, debounceTime, distinctUntilChanged, of, Subject, switchMap, tap, timer } from 'rxjs';
import { ProductsApiService } from '../../../core/api/products-api.service';
import { FormsModule } from '@angular/forms';

const PAGE_SIZE = 20;
const SCROLL_THRESHOLD_PX = 120;
@Component({
  selector: 'app-header',
  imports: [TranslatePipe, FormsModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header implements OnInit {
  private readonly i18n = inject(I18nService);
  private readonly kitchenApi = inject(KitchenApiService);
  private readonly connectivity = inject(ConnectivityService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly productApi = inject(ProductsApiService);

  searchInput = viewChild<ElementRef<HTMLInputElement>>('searchInput');
  dropdownRef = viewChild<ElementRef<HTMLElement>>('dropdown');
  resultsListRef = viewChild<ElementRef<HTMLElement>>('resultsList');

  query = signal('');
  activeCategory = signal<string | null>(null);
  isOpen = signal(false);
  activeIndex = signal(-1);
  isLoading = signal(false);
  isLoadingMore = signal(false);
  hasError = signal(false);
  recentSearches = this.productApi.recentSearches;
  readonly resultsPerPage = PAGE_SIZE;

  showRecent = computed(() => !this.query().trim() && this.isOpen());
  hasMore = computed(() => this.results().length < this.total());

  results = signal<ProductDto[]>([]);
  total = signal(0);
  categories = signal<string[]>([]);
  previousOffset = signal(0);
  offset = signal(0);
  readonly loadPercent = signal(65);
  readonly loadLevel = signal<KitchenLoadLevel>('high');
  readonly lang = this.i18n.lang;
  readonly languageToggleLabel = computed(() => (this.lang() === 'ar' ? 'EN' : 'ع'));
  readonly isOnline = this.connectivity.isOnline;
  readonly loadLabelKey = computed(() => {
    switch (this.loadLevel()) {
      case 'critical':
        return 'HEADER.LOAD_CRITICAL';
      case 'high':
        return 'HEADER.LOAD_HIGH';
      case 'medium':
        return 'HEADER.LOAD_MEDIUM';
      default:
        return 'HEADER.LOAD_LOW';
    }
  });

  private queryInput$ = new Subject<{ q: string; category: string | null; reset: boolean; }>();

  ngOnInit(): void {
    this.pollKitchenLoad();
    this.handleSearch();
  }

  private pollKitchenLoad(): void {
    timer(0, 4000).pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => this.kitchenApi
      .getLoad()
      .pipe(catchError(() => {
        return of(null);
      }))
      .subscribe({
        next: (load) => {
          if (load) {
            this.loadPercent.set(load.percent);
            this.loadLevel.set(load.level);
          }
        }
      }));
  }

  private handleSearch(): void {
    this.queryInput$
      .pipe(
        debounceTime(250),
        distinctUntilChanged((a, b) => a.q === b.q && a.category === b.category && a.reset === b.reset && this.previousOffset() === this.offset()),
        tap(({ reset }) => {
          this.hasError.set(false);
          if (reset) {
            this.isLoading.set(true);
            this.offset.set(0);
            this.previousOffset.set(0);
          } else {
            this.isLoadingMore.set(true);
          }
        }),
        switchMap(({ q, category, reset }) => {
          if (!q.trim() && !category) {
            this.isLoading.set(false);
            this.isLoadingMore.set(false);
            this.results.set([]);
            this.total.set(0);
            return of(null);
          }
          const requestOffset = reset ? 0 : this.offset();
          return this.productApi.search({ q, category: category ?? undefined, limit: PAGE_SIZE, offset: requestOffset }).pipe(
            catchError(() => {
              this.hasError.set(true);
              return of(null);
            })
          );
        }),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(res => {
        this.isLoading.set(false);
        this.isLoadingMore.set(false);
        if (!res) return;

        const isFirstPage = this.offset() === 0;
        this.results.update(current => (isFirstPage ? res.data : [...current, ...res.data]));
        this.total.set(res.meta.total);
        this.categories.set(res.meta.categories);
        this.previousOffset.set(this.offset());
        this.offset.set(res.meta.offset + res.data.length);

        if (isFirstPage) {
          this.activeIndex.set(res.data.length ? 0 : -1);
        }
      });
  }

  toggleLanguage(): void {
    this.i18n.toggle();
  }

  onInput(value: string) {
    this.query.set(value);
    this.isOpen.set(true);
    this.queryInput$.next({ q: value, category: this.activeCategory(), reset: true });
  }

  onFocus() {
    this.isOpen.set(true);
    // re-fire instantly on refocus so results/categories are fresh
    if (this.query().trim() || this.activeCategory()) {
      this.queryInput$.next({ q: this.query(), category: this.activeCategory(), reset: true });
    }
  }

  selectCategory(cat: string) {
    const next = this.activeCategory() === cat ? null : cat;
    this.activeCategory.set(next);
    this.queryInput$.next({ q: this.query(), category: next, reset: true });
  }

  selectRecent(q: string) {
    this.query.set(q);
    this.onInput(q);
  }

  select(item: ProductDto) {
    this.productApi.addRecentSearch(this.query() || item.name);
    this.isOpen.set(false);
  }

  clearRecent(): void {
    this.productApi.clearRecentSearches();
  }

  loadMore() {
    if (this.isLoadingMore() || this.isLoading() || !this.hasMore()) return;
    this.queryInput$.next({ q: this.query(), category: this.activeCategory(), reset: false });
  }

  onResultsScroll(event: Event) {
    const el = event.target as HTMLElement;
    const distanceFromBottom = el.scrollHeight - el.scrollTop - el.clientHeight;
    if (distanceFromBottom < SCROLL_THRESHOLD_PX) {
      this.loadMore();
    }
  }

  close() {
    this.query.set('');
    this.activeCategory.set(null);
    this.offset.set(0);
    this.previousOffset.set(0);
    this.results.set([]);
    this.total.set(0);
    this.categories.set([]);
    this.isLoading.set(false);
    this.isLoadingMore.set(false);
    this.hasError.set(false);
    this.isOpen.set(false);
  }

  onKeydown(event: KeyboardEvent) {
    const list = this.showRecent() ? [] : this.results();
    const max = list.length - 1;

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        this.isOpen.set(true);
        this.activeIndex.update(i => (i >= max ? 0 : i + 1));
        this.scrollActiveIntoView();
        break;

      case 'ArrowUp':
        event.preventDefault();
        this.isOpen.set(true);
        this.activeIndex.update(i => (i <= 0 ? max : i - 1));
        this.scrollActiveIntoView();
        break;

      case 'Enter': {
        event.preventDefault();
        const idx = this.activeIndex();
        if (idx >= 0 && list[idx]) {
          this.select(list[idx]);
        } else if (this.query().trim()) {
          this.productApi.addRecentSearch(this.query());
        }
        break;
      }

      case 'Escape':
        this.close();
        this.searchInput()?.nativeElement.blur();
        break;
    }
  }

  private scrollActiveIntoView() {
    queueMicrotask(() => {
      const el = this.dropdownRef()?.nativeElement.querySelector(
        `[data-index="${this.activeIndex()}"]`
      );
      el?.scrollIntoView({ block: 'nearest' });
    });
  }

  @HostListener('document:keydown', ['$event'])
  onDocumentKeydown(event: KeyboardEvent) {
    // Ctrl+K on Windows/Linux, Cmd+K on Mac
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
      event.preventDefault();
      this.searchInput()?.nativeElement.focus();
      this.searchInput()?.nativeElement.select();
      this.isOpen.set(true);
    }

    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'l') {
      event.preventDefault();
      this.toggleLanguage();
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (!this.isOpen()) return;
    const dropdownEl = this.dropdownRef()?.nativeElement;
    const inputEl = this.searchInput()?.nativeElement;
    const target = event.target as Node;
    if (dropdownEl && !dropdownEl.contains(target) && inputEl && !inputEl.contains(target)) {
      this.close();
    }
  }
}
