import { TestBed } from '@angular/core/testing';

import { SeriesService } from './series.service';

describe('SeriesService', () => {
  let service: SeriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('series sum using recursion x=-3.14 y=-1.0000', () => {
    let x = -3.14;
    let y = -1.0000;
    let y1 = service.getSeries(x);
    expect(y.toFixed(4)).toBe(y1.toFixed(4));
  });
});
