import { TestBed } from '@angular/core/testing';

import { OrdersStore } from './orders-store.service';

describe('OrdersStore', () => {
  let service: OrdersStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdersStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
