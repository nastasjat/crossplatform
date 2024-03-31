import { TestBed } from '@angular/core/testing';

import { TabService } from './tab.service';

describe('TabService', () => {
  let service: TabService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TabService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('tabulating x=-3.14 y=-1.6424', () => {
    let x = -3.14;
    let y = -1.6424;
    let xy = service.getTab();
    let y1: number | undefined;
    y1 = xy.get(x);
    if (y1 != undefined) {
      expect(y.toFixed(4)).toBe(y1.toFixed(4));
    } 
  });
});
