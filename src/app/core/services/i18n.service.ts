import { DOCUMENT } from '@angular/common';
import { Injectable, computed, inject, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { firstValueFrom } from 'rxjs';

export type AppLanguage = 'en' | 'ar';

const STORAGE_KEY = 'lang';

@Injectable({ providedIn: 'root' })
export class I18nService {
    private readonly doc = inject(DOCUMENT);
    private readonly translate = inject(TranslateService);

    private readonly langSig = signal<AppLanguage>('en');
    readonly lang = computed(() => this.langSig());
    readonly dir = computed(() => (this.langSig() === 'ar' ? 'rtl' : 'ltr'));

    init(): void {
        const stored = getLocalStorage(STORAGE_KEY) as AppLanguage;
        const initial: AppLanguage = stored ?? 'ar';

        this.translate.addLangs(['en', 'ar']);
        this.translate.setFallbackLang('ar');
        this.use(initial);
    }

    use(lang: AppLanguage): void {
        this.langSig.set(lang);
        setLocalStorage(STORAGE_KEY, lang);
        this.setDocumentAttrs(lang);
        this.translate.use(lang);
    }

    toggle(): void {
        this.use(this.langSig() === 'en' ? 'ar' : 'en');
    }

    private setDocumentAttrs(lang: AppLanguage): void {
        const root = this.doc.documentElement;
        root.lang = lang;
        root.dir = lang === 'ar' ? 'rtl' : 'ltr';
    }
}

function getLocalStorage(key: string): string | null {
    return localStorage.getItem(key) ?? null;
}

function setLocalStorage(key: string, value: string): void {
    localStorage.setItem(key, value);
}

