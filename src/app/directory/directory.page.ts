import { Component, OnInit } from '@angular/core';
import { Student } from './services/Student';
import { Specialty } from './services/Specialty';
import { SpecialtyList } from './services/SpecialtyList';
import { StudentList } from './services/StudentList';
import { ConfigService } from './services/config.service';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import { FirebaseService } from './services/firebase.service';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.page.html',
  styleUrls: ['./directory.page.scss'],
})
  
export class DirectoryPage implements OnInit {

  specialties = new SpecialtyList();

  //observable service
  private configService = new ConfigService();
  //observables array
  private subscriptions: Subscription[] = [];

  studentList = new StudentList(this.configService);

  //current specialty
  specialty: Specialty = new Specialty();
  i = 0;

  //databases 
  dbSpecialty = 'Specialty';
  dbStudent = 'Student';
  constructor(public fbservice: FirebaseService) { }

  //get data upon loading the page
  ngOnInit() {
    //connect to the Student database
    this.getData(this.dbStudent, true);
    //get students list
    let studResult = this.fbservice.getRecordList(this.dbStudent, true);
    studResult.snapshotChanges().subscribe(
    )

    //connect to the Specialty database
    this.getData(this.dbSpecialty, false);
    //get specialties list
    let specResult = this.fbservice.getRecordList(this.dbSpecialty, true);
    specResult.snapshotChanges().subscribe(
    )

    // declare observable 
    const specSub = this.configService.specialty$
      //subscribe to changes and get current value
      .subscribe(() => {
        this.specialty = this.configService.specialty$.value;
      });
    //push observable into an array
    this.subscriptions.push(specSub);
  }

  //get list from the database
  getData(db: any, op: any) {
    this.fbservice.getRecordList(db, op).valueChanges().subscribe(change => {
      console.log(change)

      if (op) { //get students
        this.studentList.studentList = change;
      }

      else {//get specialties
        this.specialties.specialty = change;
        this.specialty = this.specialties.specialty[this.i]; //get specialty at index 0 initially
        this.studentList.search(this.specialty.id); //get students for this specialty
      }
    })
  }

  nextSpecialty() {
    if (this.i < this.specialties.specialty.length - 1) { //if there is a next specialty
      this.i++;
    }

    else this.i = 0;
    //change specialty in service
    this.configService.setSpecialty(this.specialties.specialty[this.i]);
  }

  addStudent(firstName: any, lastName: any, studentId: any, group: any, gpa: any) {
    let student = new Student();
    student.firstName = firstName;
    student.lastName = lastName;
    student.group = group;
    student.studentId = studentId;
    student.gpa = gpa;
    student.specialty_id = this.specialty.id;

    //create a new Student in a database table
    this.fbservice.createStudent(student);
    this.studentList.search(this.specialty.id);
    this.studentList.add(student);
  }

  addSpecialty(specialty: any) {
    let spec = new Specialty();
    spec.id = this.specialties.specialty.length + 1;
    spec.name = specialty;

    //create a new Specialty in a database table
    this.fbservice.createSpecialty(spec);
  }

  ngOnDestroy() {
    this.subscriptions
      .forEach(s => s.unsubscribe());
  }
}
