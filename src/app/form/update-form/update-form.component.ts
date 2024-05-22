import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Product } from '../class/product';
import { AlertController } from '@ionic/angular';
import { UnitsService } from '../services/units.service';
import { PriceService } from '../services/price.service';
import { QuantityService } from '../services/quantity.service';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.scss'],
})
export class UpdateFormComponent  implements OnInit {

  @Input() product!: Product;
  @Input() show: boolean = true; // show the update form or not
  @Output() productUpd: EventEmitter<Product> = new EventEmitter<Product>();
  @Output() showUpd = new EventEmitter();

  constructor(private alertController: AlertController) { }

  validate_unit(unit: string) {
    let validator = new UnitsService();
    if (unit)
      if (!validator.validate_units(unit)) return false;
      else return true;
    else return true;
  }

  validate_price(price: number) {
    let validator = new PriceService();
    if (price)
      if (!validator.validate_price(price)) return false;
      else return true;
    else return true;
  }

  
  validate_quantity(qty: number) {
    let validator = new QuantityService();
    if (qty)
      if (!validator.validate_qty(qty)) return false;
      else return true;
    else return true;
  }

  save_upd(name: any, unit: any, qty: any, price: any) {
    this.show = false;
    let errorMessage = '';

    let quantity = parseFloat(qty);
    let cost = parseFloat(price);

    if (!this.validate_unit(unit)) {
      errorMessage += 'Invalid unit.\n';
    }

    if (!this.validate_price(cost)) {
      errorMessage += 'Invalid price.\n';
    }

    if (!this.validate_quantity(quantity)) {
      errorMessage += 'Invalid quantity.\n';
    }

    if (errorMessage === '') {
      this.product = new Product(name, unit, quantity, cost, this.product.manufacturers);
      this.productUpd.emit(this.product);
      this.showUpd.emit(this.show);
    } else {
      this.presentAlert(errorMessage);
    }
  }

  async presentAlert(msg: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      subHeader: '',
      message: msg,
      buttons: ['OK'],
    });
    await alert.present();
  }

  ngOnInit() {}
}
