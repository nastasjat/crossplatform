import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
 
@Component({
  selector: 'app-graph',
  templateUrl: './graph.page.html',
  styleUrls: ['./graph.page.scss'],
})
export class GraphPage implements OnInit {

  @ViewChild('graph') private graph?: ElementRef;
  chart: any;
  xn: number = 0;
  xk: number = 0;
  a: number = 0;
  h: number = 0;
  xx: string[] = [];
  yy: number[] = [];
  data: string[] = [];

  constructor() { Chart.register(...registerables); }

  ngOnInit() {
  }

  chartMethod() {
    if (this.chart instanceof Chart) {
      this.chart.destroy();
    }

    this.chart = new Chart(this.graph?.nativeElement, {
      type: 'line', //linear graph

      data: {
        labels: this.xx,
        datasets: [
          {
            label: 'Function Graph',
            fill: false,
            borderColor: 'rgba(75, 192, 192, 1)',
            borderDashOffset: 0.0,
            pointRadius: 1,
            data: this.yy,
            spanGaps: false,
          }
        ]
      }
    }); 
  }

  plotGraph(xn: any, xk: any, a: any, h: any) {
    this.data = [];
    this.xn = parseFloat(xn);
    this.xk = parseFloat(xk);
    this.a = parseFloat(a);
    this.h = parseFloat(h);
    let x: number, y: number, i: number = 0;
    x = this.xn;
    this.xx = new Array();
    this.yy = new Array();

    while (x < this.xk) {
      if (x <= 0) {
        y = (Math.tan(x+1) ** 2) / (x ** 4 + 2 * x ** 3 - x);
      }
      else 
        if (x <= this.a) {
          y = (2 * x + 2) / (Math.tan(2 * x - 1) + 1);
        }
        else {
          y = (Math.cos((x + 2) ** 2)) / (Math.exp(-2 * x) + Math.pow(3 * x ** 2 + 1, 1 / 4));
        }
      this.xx.push(x.toFixed(1));
      this.yy.push(parseFloat(y.toFixed(1)));
      let s = 'x = ' + x.toFixed(1) + ' y = ' + y.toFixed(1);
      this.data.push(s);
      x = x + this.h;
    }
    this.chartMethod();
  }

}
function viewChild(arg0: string): (target: GraphPage, propertyKey: "graph") => void {
  throw new Error('Function not implemented.');
}

