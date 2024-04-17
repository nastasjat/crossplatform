import { TestBed } from '@angular/core/testing';

import { QuantityService } from './quantity.service';

describe('QuantityService', () => {
  let service: QuantityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuantityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('for quantity 10 should return true', () => {
    let s = service.validate_qty(10);
    expect(s).toBe(true);
  });

  it('for quantity -10 should return false', () => {
    let s = service.validate_qty(-10);
    expect(s).toBe(false);
  });

  it('for quantity 2.5 should return false', () => {
    let s = service.validate_qty(2.5);
    expect(s).toBe(false);
  });
});
