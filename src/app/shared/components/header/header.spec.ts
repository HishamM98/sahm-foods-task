import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideTranslateService } from '@ngx-translate/core';

import { Header } from './header';
import { I18nService } from '../../../core/services/i18n.service';

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header],
      providers: [
        provideTranslateService({ fallbackLang: 'ar', lang: 'ar' }),
        I18nService,
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    }).compileComponents();

    httpMock = TestBed.inject(HttpTestingController);
    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    fixture.detectChanges();

    await new Promise(resolve => setTimeout(resolve));

    const req = httpMock.expectOne('/api/kitchen/load');
    req.flush({
      data: { level: 'high', percent: 72, activeTickets: 9, avgDwellSeconds: 100, updatedAt: new Date().toISOString() },
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
