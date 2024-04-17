import { Component, OnInit } from '@angular/core';
import { Product } from '../class/product';

@Component({
  selector: 'app-view-form',
  templateUrl: './view-form.component.html',
  styleUrls: ['./view-form.component.scss'],
})
export class ViewFormComponent  implements OnInit {

  products: Product[] = [];
  show_updated: boolean = false;

  addProduct(event: any) {
    if (event as Product) {
      let product: Product = event;
      this.products.push(product);
      console.log(this.products);
    }
    else
      throw new Error("Error of type!");
  }
  constructor() { }

  update() {
    this.show_updated = true; //shows the update form
  }

  showNew(event: any) {
    if (typeof event === 'boolean') {
      this.show_updated = event;
    }

    else throw new Error('Error of type');
  }

  // updates the product in the list at index i
  save_changes(event: any, i: number) {
    if (event as Product) {
      this.products[i] = event;
    }

    else throw new Error('Error of type');
  }

  ngOnInit() {}

}
