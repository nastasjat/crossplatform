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
    try {
      this.size = parseInt(size); 

      if (isNaN(this.size) || this.size <= 0) {
        throw new Error('Invalid matrix size.');
      }

      this.matrix = [];

      for (let i = 0; i < this.size; i++) {
        const row = [];
        for (let j = 0; j < this.size; j++) {
          row.push(Math.floor(Math.random() * 21) - 10);
        }
        this.matrix.push(row);
      }
    } catch (error) {
      console.log(error);
    }
  }

  highlight(element: number): boolean {
    return element < 0 && element % 2 !== 0 && element > -10;
  }

}
