import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  matrix: number[][] = [];
  size: number = 0;
  constructor() { }
  
  generateMatrix(size: any): void {
    this.matrix = [];
    for (let i = 0; i < size; i++) {
      const row = [];
      for (let j = 0; j < size; j++) {
        row.push(Math.floor(Math.random() * 21) - 10); // Random number between -10 and 10
      }
      this.matrix.push(row);
    }
  }

  highlight(element: number): boolean {
    return element < 0 && element % 2 !== 0 && element > -10;
  }

}
