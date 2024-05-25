import { FirebaseService } from './../services/firebase.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Student } from '../services/Student';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
})
export class StudentComponent implements OnInit {
  dbStudent = 'Student';

  @Input() student!: Student;
  @Input() fbService!: FirebaseService;
  
  //editing results
  @Output() edit = new EventEmitter<Student>();
  @Output() del = new EventEmitter<boolean>();
  editing: boolean = false;
  constructor() { }
  
  //delete Student
  deleteStudent() {
    if (window.confirm('Are you sure you want to delete?')) {
      let id = this.student.id - 1;
      this.fbService.deleteRecord(id.toFixed(), this.dbStudent);
      this.del.emit(true);
    }
  }

  editStudentShow() {
    this.editing = true;
  }

  saveEdit(firstName: any, lastName: any, group: any, gpa: any, studentId: any) {
    console.log('Edit');
    this.student.firstName = firstName;
    this.student.lastName = lastName;
    this.student.group = group;
    this.student.gpa = gpa;
    this.student.studentId = studentId;
    this.editing = false;
    let s: number = this.student.id - 1;
    this.fbService.updateStudent(s, this.student, this.dbStudent);
  }
  ngOnInit() {}
}