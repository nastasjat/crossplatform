import { Injectable, Optional } from '@angular/core';
import { LogService } from '../logger/log.service';

@Injectable({
  providedIn: 'root'
})
export class RecursionService {
  yy: number = 0;
  private xy = new Map();

  constructor(@Optional() private logService: LogService) { }

  getRecursion(x: number, i: number, sum: number) {
    let min = 1E-12;
    let term = (-1) ** (i + 1) * (Math.cos(i * x) / (i * i));

    i++;
    sum += term;

    if (Math.abs(term) < min) {
      this.getRecursion(x, i, sum);
    }
    else this.yy = sum;
  }

  getTab(xn: number = -3.14, xk: number = 3.14, h: number = 0.1) {
    let x = xn;

    while (x <= xk) {
      this.getRecursion(x, 1, 0); 
      this.xy.set(x, this.yy);
      
      if (this.logService) {
        this.logService.write("x = " + x.toFixed(2) + " y = " + this.yy.toFixed(4));
      }
      x += h;
    }

    return this.xy;
  }
}