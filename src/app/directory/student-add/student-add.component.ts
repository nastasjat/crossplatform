import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Student } from '../services/Student';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.scss'],
})
export class StudentAddComponent  implements OnInit {

  @Input() id!: number;
  @Input() spec_id!: number;
  @Output() studentChange: EventEmitter<Student> = new EventEmitter<Student>();

  // Input for Students
  formStudent!: FormGroup;
  constructor(fb: FormBuilder) {
    this.formStudent = fb.group({
      firstName: [''],
      lastName: [''],
      studentId: [''],
      gpa: [''],
      group: [''],
    });
  }

  addStudent() {
    let student = new Student();
    let s: number = this.id + 1;
    
    student.id = s;
    student.firstName = this.formStudent.value.firstName;
    student.lastName = this.formStudent.value.lastName;
    student.studentId = this.formStudent.value.studentId;
    student.group = this.formStudent.value.group;
    student.gpa = this.formStudent.value.gpa;

    student.specialty_id = this.spec_id;
    this.studentChange.emit(student);
  }

  ngOnInit() {}

}
