import { TestBed } from '@angular/core/testing';

import { RecursionService } from './recursion.service';

describe('RecursionService', () => {
  let service: RecursionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecursionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('series sum using recursion x=-3.14 y=-1.0000', () => {
    let x = -3.14;
    let y = -1.0000;
    let sum = 0;
    service.getRecursion(x, 1, sum);
    expect(y.toFixed(4)).toBe(service.yy.toFixed(4));
  });
});
