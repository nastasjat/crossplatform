import { TestBed } from '@angular/core/testing';

import { PriceService } from './price.service';

describe('PriceService', () => {
  let service: PriceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PriceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('for price 500 should return true', () => {
    let s = service.validate_price(500);
    expect(s).toBe(true);
  });

  it('for price -10 should return false', () => {
    let s = service.validate_price(-10);
    expect(s).toBe(false);
  });

  it('for price 200000 should return false', () => {
    let s = service.validate_price(200000);
    expect(s).toBe(false);
  });
});
