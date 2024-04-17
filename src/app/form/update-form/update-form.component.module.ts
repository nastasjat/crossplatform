import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateFormComponent } from './update-form.component';
import { ProductFormModule } from '../product-form/product-form.component.module';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [UpdateFormComponent],
  imports: [IonicModule, ReactiveFormsModule, CommonModule, ProductFormModule],
  exports: [UpdateFormComponent]
})
export class UpdateFormModule {}