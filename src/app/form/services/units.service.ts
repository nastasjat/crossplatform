import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UnitsService {
  public validUnits = ['kg', 'kilograms', 'g', 'grams', 'milligrams', 'mg',
    'litres', 'ltr', 'metres', 'm', 'square metres', 'sqm'];
  
  validate_units(value: string): boolean {
    return this.validUnits.includes(value.toLowerCase());
  }

  constructor() { }
}
