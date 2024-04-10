import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from '../class/product';
import { unitsValidator } from '../services/unitsValidator';
import { priceValidator } from '../services/priceValidator';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
  
export class ProductFormComponent implements OnInit {
  
  productForm!: FormGroup;
  product!: Product;

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      unit: ['', [unitsValidator()]],
      qty: ['', [Validators.required, Validators.min(0)]],
      price: ['', [priceValidator()]],
      manufacturers: new FormArray([new FormControl()]),
    });
  }

  addManufacturers() {
    (this.productForm.controls['manufacturers'] as FormArray).push(new FormControl());
  }

  deleteManufacturers(index: any) {
    (this.productForm.controls['manufacturers'] as FormArray).removeAt(index);
  }

  getManufacturers() {
    return (this.productForm.get('manufacturers') as FormArray).controls;
  }

  onSubmit() {
    let name = this.productForm.value.name;
    let unit = this.productForm.value.unit;
    let qty = this.productForm.value.qty;
    let price = this.productForm.value.price;
    let manufacturers = this.productForm.value.manufacturers;
    this.product = new Product(name, unit, qty, price, manufacturers);
    console.log("Submit");
  }
  ngOnInit() {}

}
