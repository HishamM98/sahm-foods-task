import { TestBed } from '@angular/core/testing';
import { ElapsedTimePipe } from './elapsed-time-pipe';
import { provideTranslateService } from '@ngx-translate/core';

describe('ElapsedTimePipe', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElapsedTimePipe],
      providers: [provideTranslateService({ fallbackLang: 'ar', lang: 'ar' }), ElapsedTimePipe],
    }).compileComponents();
  });

  it('should create the pipe', () => {
    const pipe = TestBed.inject(ElapsedTimePipe);
    expect(pipe).toBeTruthy();
  });
});
