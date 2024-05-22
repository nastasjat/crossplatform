import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DirectoryPageRoutingModule } from './directory-routing.module';

import { DirectoryPage } from './directory.page';
import { HeaderModule } from '../header/header.component.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DirectoryPageRoutingModule,
    HeaderModule
  ],
  declarations: [DirectoryPage]
})
export class DirectoryPageModule {}
