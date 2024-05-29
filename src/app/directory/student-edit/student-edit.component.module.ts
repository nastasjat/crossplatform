import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StudentEditComponent } from './student-edit.component';

@NgModule({
  declarations: [StudentEditComponent],
  imports: [IonicModule, ReactiveFormsModule, CommonModule],
  exports: [StudentEditComponent]
})
export class StudentEditModule {}