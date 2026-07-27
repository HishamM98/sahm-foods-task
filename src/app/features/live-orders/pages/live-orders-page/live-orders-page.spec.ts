import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideTranslateService } from '@ngx-translate/core';

import { LiveOrdersPage } from './live-orders-page';
import { MessageService } from 'primeng/api';

describe('LiveOrdersPage', () => {
  let component: LiveOrdersPage;
  let fixture: ComponentFixture<LiveOrdersPage>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiveOrdersPage],
      providers: [
        provideTranslateService({ fallbackLang: 'ar', lang: 'ar' }),
        provideHttpClient(),
        provideHttpClientTesting(),
        MessageService,
      ],
    }).compileComponents();

    httpMock = TestBed.inject(HttpTestingController);
    fixture = TestBed.createComponent(LiveOrdersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();

    await new Promise(resolve => setTimeout(resolve));

    const req = httpMock.expectOne('/api/orders');
    req.flush({
      data: [
        { id: '1', items: ['Item 1', 'Item 2'], elapsedSeconds: 100, priority: 'high', status: 'pending', customer: { name: 'John Doe', phone: '1234567890', addressLine1: '123 Main St', addressLine2: 'Apt 1' }, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), etaAt: new Date(Date.now() + 1000 * 60 * 60).toISOString(), closedAt: null, timeline: [], delayed: false, isNew: false, calling: false, channel: 'walk-in' },
      ]
    });
    await fixture.whenStable();
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
