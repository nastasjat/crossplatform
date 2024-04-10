import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PriceService {
  private minPrice: number = 5;
  private maxPrice: number = 100000;

  validate_price(price: number): boolean {
    if (price < this.minPrice || price > this.maxPrice) {
      return false;
    }
    return true;
  }

  constructor() { }
}
