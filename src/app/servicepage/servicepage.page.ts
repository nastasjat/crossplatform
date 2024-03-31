import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import {RecursionService} from './services/recursion/recursion.service';
import { SeriesService } from './services/series/series.service';
import { TabService } from './services/tab/tab.service';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-servicepage',
  templateUrl: './servicepage.page.html',
  styleUrls: ['./servicepage.page.scss'],
})
export class ServicepagePage implements OnInit {
  @ViewChild('myGraph') private graph?: ElementRef;
  chart: any;

  constructor(private tabService: TabService,
    private seriesService: SeriesService,
    private recursionService: RecursionService) {
    Chart.register(...registerables);
  }
  

  ngOnInit() {
  }

  xyTab = new Map();
  xySeries = new Map();
  xyRecursion = new Map();
  xyInput = new Map();

  calculate(xn: any, xk: any, h: any) {
    let xn1 = parseFloat(xn),
      xk1 = parseFloat(xk),
      h1 = parseFloat(h);
    
    console.log("Tabulation");
    this.xyTab = this.tabService.getTab(xn1, xk1, h1);
    console.log("Series");
    this.xySeries = this.seriesService.getTab(xn1, xk1, h1);
    console.log("Recursion");
    this.xyRecursion = this.recursionService.getTab(xn1, xk1, h1);
    this.input();

    // this.chartMethod();
    this.chartMethod(xn1, xk1, h1);
  }

  input() {
    this.xyTab.forEach((value, key, map) => {
      let s = '';
      let y: number;
      y = value;
      s = y.toFixed(4) + " ";
      y = this.xySeries.get(key);
      s = s + y.toFixed(4);
      y = this.xyRecursion.get(key);
      s = s + " " + y.toFixed(4);
      let x = key;
      this.xyInput.set(x.toFixed(2), s);
    })
  }

  chartMethod(xn: any, xk: any, h: any) {
    if (this.chart instanceof Chart) {
      this.chart.destroy();
    }

  // const labels = Array.from(this.xyTab.keys());
    
    const labels: string[] = [];
    let x = xn;
    while (x <= xk) {
      labels.push(x.toFixed(2));
      x += h;
    }
    
    this.chart = new Chart(this.graph?.nativeElement, {
    type: 'line', //linear graph

    data: {
      labels: labels,
      datasets: [{
        label: 'Tabulation',
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)', 
        borderDashOffset: 0.0,
        pointRadius: 1,
        data: Array.from(this.xyTab.values()),
        spanGaps: false,
      },
      {
        label: 'Series',
        fill: false,
        borderColor: 'rgba(255, 99, 132, 1)', 
        borderDashOffset: 0.0,
        pointRadius: 1,
        data: Array.from(this.xySeries.values()),
        spanGaps: false,
      },
      {
        label: 'Recursion',
        fill: false,
        borderColor: 'rgba(54, 162, 235, 1)', 
        borderDashOffset: 0.0,
        pointRadius: 1,
        data: Array.from(this.xyRecursion.values()),
        spanGaps: false,
      },]},
    });
  }
}
