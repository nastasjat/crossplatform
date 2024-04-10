import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewFormComponent } from './view-form.component';
import { ProductFormModule } from '../product-form/product-form.component.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ViewFormComponent],
  imports: [IonicModule, ReactiveFormsModule, CommonModule, ProductFormModule],
  exports: [ViewFormComponent]
})
export class ViewFormModule {}