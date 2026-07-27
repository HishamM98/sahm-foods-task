import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideTranslateService } from '@ngx-translate/core';

import { DashboardPage } from './dashboard-page';
import { Input } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[echarts]',
  standalone: true,
})
class MockEchartsDirective {
  @Input() echarts: unknown;
  @Input() options: unknown;
  @Input() theme: unknown;
  @Input() initOpts: unknown;
  @Input() merge: unknown;
  @Input() autoResize: unknown;
}

describe('DashboardPage', () => {
  let component: DashboardPage;
  let fixture: ComponentFixture<DashboardPage>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardPage],
      providers: [
        provideTranslateService({ fallbackLang: 'ar', lang: 'ar' }),
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    })
      .overrideComponent(DashboardPage, {
        remove: { imports: [/* NgxEchartsDirective or NgxEchartsModule, whatever DashboardPage imports */] },
        add: { imports: [MockEchartsDirective] },
      })
      .compileComponents();

    httpMock = TestBed.inject(HttpTestingController);
    fixture = TestBed.createComponent(DashboardPage);
    component = fixture.componentInstance;

    await new Promise(resolve => setTimeout(resolve));

    fixture.detectChanges();

    const kitchenReqs = httpMock.match((req) => req.urlWithParams.includes('/api/kitchen/load'));
    kitchenReqs.forEach(req => req.flush({
      data: { level: 'critical', percent: 85, activeTickets: 24, avgDwellSeconds: 100, updatedAt: new Date().toISOString() }
    }));

    const ordersReqs = httpMock.match((req) => req.urlWithParams.includes('/api/orders'));
    ordersReqs.forEach(req => req.flush({
      data: [
        { id: '1', items: ['Item 1', 'Item 2'], elapsedSeconds: 100, priority: 'high', status: 'pending', customer: { name: 'John Doe', phone: '1234567890', addressLine1: '123 Main St', addressLine2: 'Apt 1' }, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), etaAt: new Date(Date.now() + 1000 * 60 * 60).toISOString(), closedAt: null, timeline: [], delayed: false, isNew: false, calling: false, channel: 'walk-in' },
      ]
    }));

    await fixture.whenStable();
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});