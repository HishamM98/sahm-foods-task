import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { provideTranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideTranslateService({ fallbackLang: 'ar', lang: 'ar' }), MessageService],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);

    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
