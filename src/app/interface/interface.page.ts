import { Component, OnInit } from '@angular/core';
import { Invoice } from './classes/invoice';
import { AirWaybill } from './classes/air-waybill';
import { Bill } from './classes/bill';
import { Receipt } from './classes/receipt';

@Component({
  selector: 'app-interface',
  templateUrl: './interface.page.html',
  styleUrls: ['./interface.page.scss'],
})
export class InterfacePage implements OnInit {
  show = '';
  constructor() { }

  ngOnInit() {
  }

  getResult() {
    let invoice = new Invoice('125454', new Date(), 'Laptop', 5000, 0.07);
    let airWaybill = new AirWaybill('AL-3165461', new Date(), 'Cargo Shipment', 1000, 0.05, 0.02, 'AL');
    let bill = new Bill('654646', new Date(), 'Electricity', 200, new Date(2023, 4, 1));
    let receipt = new Receipt('6546746', new Date(), 'Groceries', 75.5, 'Cash');

    this.show += 'Invoice:\n' + invoice.show() + '\n\n';
    this.show += 'Air Waybill:\n' + airWaybill.show() + '\n\n';
    this.show += 'Bill:\n' + bill.show() + '\n\n';
    this.show += 'Receipt:\n' + receipt.show();
  }
}
