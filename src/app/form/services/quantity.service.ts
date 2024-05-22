import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuantityService {

  validate_qty(value: number): boolean {
    if (Number.isInteger(value) && value >= 0) {
      return true;
    }
    return false;
  }

  constructor() { }
}
