import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuantityService {

  validate_qty(value: number): boolean {
    return Number.isInteger(value) && value >= 0;
  }

  constructor() { }
}
