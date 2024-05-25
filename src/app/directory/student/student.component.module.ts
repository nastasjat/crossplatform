import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student.component';

@NgModule({
  declarations: [StudentComponent],
  imports: [IonicModule, ReactiveFormsModule, CommonModule],
  exports: [StudentComponent]
})
export class StudentModule {}