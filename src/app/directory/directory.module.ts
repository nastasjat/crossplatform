import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DirectoryPageRoutingModule } from './directory-routing.module';

import { DirectoryPage } from './directory.page';
import { HeaderModule } from '../header/header.component.module';
import { StudentEditModule } from "./student-edit/student-edit.component.module";
import { StudentAddModule } from "./student-add/student-add.component.module";
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [DirectoryPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        DirectoryPageRoutingModule,
        HeaderModule,
        StudentEditModule,
        StudentAddModule,
        ReactiveFormsModule
    ]
})
export class DirectoryPageModule {}
