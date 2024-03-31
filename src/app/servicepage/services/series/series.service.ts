import { Injectable, Optional } from '@angular/core';
import { LogService } from '../logger/log.service';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  constructor(@Optional() private logService: LogService) { }

  private xy = new Map();

  getSeries(x: number) {
    let min = 1E-12;
    let term: number;
    let i: number = 1;
    let sum: number = 0;

    do {
      term = (-1) ** (i + 1) * (Math.cos(i * x) / (i * i));
      i++;
      sum += term;
    }

    while (Math.abs(term) < min)
    return sum;
  }

  getTab(xn: number = -3.14, xk: number = 3.14, h: number = 0.1) {
    let x = xn,
    y = 0.0;
    while (x <= xk) {
      y = this.getSeries(x);
      this.xy.set(x, y);
      if (this.logService) {
        this.logService.write("x = " + x.toFixed(2) + " y = " + y.toFixed(4))
      }
      x += h;
    }
    return this.xy;
  }
}