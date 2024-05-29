import { StudentAddComponent } from './student-add.component';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [StudentAddComponent],
  imports: [IonicModule, ReactiveFormsModule, CommonModule],
  exports: [StudentAddComponent]
})
export class StudentAddModule {}