import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideTranslateService } from '@ngx-translate/core';
import { OrderDetails } from './order-details';

describe('OrderDetails', () => {
  let component: OrderDetails;
  let fixture: ComponentFixture<OrderDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderDetails],
      providers: [provideHttpClient(), provideHttpClientTesting(), provideTranslateService()],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderDetails);
    fixture.componentRef.setInput('orderId', '2841');
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
