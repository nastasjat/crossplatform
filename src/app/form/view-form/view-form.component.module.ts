import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewFormComponent } from './view-form.component';
import { ProductFormModule } from '../product-form/product-form.component.module';
import { CommonModule } from '@angular/common';
import { UpdateFormModule } from '../update-form/update-form.component.module';

@NgModule({
  declarations: [ViewFormComponent],
  imports: [IonicModule, ReactiveFormsModule, CommonModule, ProductFormModule, UpdateFormModule],
  exports: [ViewFormComponent]
})
export class ViewFormModule {}