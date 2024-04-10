import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductFormComponent } from './product-form.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ProductFormComponent],
  imports: [IonicModule, ReactiveFormsModule, CommonModule],
  exports: [ProductFormComponent]
})
export class ProductFormModule {}