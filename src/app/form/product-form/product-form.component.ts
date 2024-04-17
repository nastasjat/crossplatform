import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from '../class/product';
import { unitsValidator } from '../services/unitsValidator';
import { priceValidator } from '../services/priceValidator';
import { qtyValidator } from '../services/quantityValidator';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
  
export class ProductFormComponent implements OnInit {
  
  productForm!: FormGroup;
  product!: Product;

  @Output() productNew: EventEmitter<Product> = new EventEmitter<Product>();

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      unit: ['', [unitsValidator()]],
      qty: ['', [qtyValidator()]],
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
    if (this.productForm.valid) {
      console.log('Form Values:', this.productForm.value);
      this.product = new Product(
      this.productForm.value.name,
      this.productForm.value.unit,
      this.productForm.value.qty,
      this.productForm.value.price,
      this.productForm.value.manufacturers
      );
      this.productNew.emit(this.product);
    }
    else {
      console.log('Form is invalid');
    }
  }
  
  ngOnInit() { }
}
