import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AbstractPageRoutingModule } from './abstract-routing.module';

import { AbstractPage } from './abstract.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AbstractPageRoutingModule
  ],
  declarations: [AbstractPage]
})
export class AbstractPageModule {}
