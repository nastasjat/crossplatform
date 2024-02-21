import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() { }
  num1: number = 0;
  num2: number = 0;
  num3: number = 0;
  result: number = 0;

  calculateMultiples(num1: any, num2: any, num3: any) {
    try {
      this.num1 = parseFloat(num1);
      this.num2 = parseFloat(num2);
      this.num3 = parseFloat(num3);
      this.result = 0;

      const numbers = [this.num1, this.num2, this.num3];
      this.result = numbers.filter(number => number % 27 === 0).length;
    }
    
    catch (error) {
      console.log(error);
    }
  }
}
