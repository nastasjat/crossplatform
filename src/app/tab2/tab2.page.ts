import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() { }
  a: number = 0;
  b: number = 0;
  result: number = 0;

  calculateCount(a: any, b: any) {
    try {
      this.a = parseFloat(a);
      this.b = parseFloat(b);
      this.result = 0;

      for (let i = this.a; i <= this.b; i++) {
        if (i % 3 === 2 && i % 2 === 0) {
          this.result++;
        }
      }
    }

    catch (error) {
      console.log(error);
    }

}
}