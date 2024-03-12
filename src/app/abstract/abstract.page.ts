import { Component, OnInit } from '@angular/core';
import { PrintMedia } from './Class/PrintMedia';
import { Magazine } from './Class/Magazine';
import { Newspaper } from './Class/Newspaper';

@Component({
  selector: 'app-abstract',
  templateUrl: './abstract.page.html',
  styleUrls: ['./abstract.page.scss'],
})
export class AbstractPage implements OnInit {

  constructor() { }

  media: PrintMedia[] = [];
  avgMagazineCost: number = 0;
  avgNewspaperCost: number = 0;

  getRandomInt(max: number, min: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  calculate(n: any) {
    this.media = new Array();
    let number = parseInt(n);

    let totalMagazineCost = 0;
    let totalNewspaperCost = 0;
    let numMagazines = 0;
    let numNewspapers = 0;

    for (let i = 0; i < number; i++) {
      this.media.push(new Magazine("Magazine", this.getRandomInt(10000, 500), this.getRandomInt(500, 300)));
      this.media.push(new Newspaper("Newspaper", this.getRandomInt(10000, 500), this.getRandomInt(30, 15), this.getRandomInt(10, 5)))
    }

  this.media.forEach((item) => {
      if (item instanceof Magazine) {
        item.calculateCost();
        totalMagazineCost += item.circulationCost;
        numMagazines += item.circulation;
      } else if (item instanceof Newspaper) {
        item.calculateCost();
        totalNewspaperCost += item.circulationCost;
        numNewspapers += item.circulation;
      }
  });
    
    this.avgMagazineCost = totalMagazineCost / numMagazines;
    this.avgNewspaperCost = totalNewspaperCost / numNewspapers;
  }

  ngOnInit() {
  }

}
