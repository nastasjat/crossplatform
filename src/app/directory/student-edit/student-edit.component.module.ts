import { StudentEditComponent } from './student-edit.component';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [StudentEditComponent],
  imports: [IonicModule, ReactiveFormsModule, CommonModule],
  exports: [StudentEditComponent]
})
export class StudentEditModule {}