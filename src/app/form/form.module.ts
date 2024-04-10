import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormPageRoutingModule } from './form-routing.module';

import { FormPage } from './form.page';
import { HeaderModule } from '../header/header.component.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductFormModule } from './product-form/product-form.component.module';
import { ViewFormModule } from './view-form/view-form.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormPageRoutingModule,
    HeaderModule,
    ReactiveFormsModule,
    ProductFormModule,
    ViewFormModule
  ],
  declarations: [FormPage]
})
export class FormPageModule {}
