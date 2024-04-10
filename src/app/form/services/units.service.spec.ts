import { TestBed } from '@angular/core/testing';

import { UnitsService } from './units.service';

describe('UnitsService', () => {
  let service: UnitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('for kg should return true', () => {
    let s = service.validate_units('kg');
    expect(s).toBe(true);
  });

  it('for METRES should return true', () => {
    let s = service.validate_units('METRES');
    expect(s).toBe(true);
  });

  it('for pounds should return false', () => {
    let s = service.validate_units('pounds');
    expect(s).toBe(false);
  });
});
