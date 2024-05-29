import { Component, OnInit } from '@angular/core';
import { Student } from './services/Student';
import { FormBuilder, FormControl, FormGroup, Validators,} from '@angular/forms';
import { Specialty } from './services/Specialty';
import { SpecialtyList } from './services/SpecialtyList';
import { StudentList } from './services/StudentList';
import { ConfigService } from './services/config.service';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import { FirebaseService } from './services/firebase.service';
import { StudentEditModule } from './student-edit/student-edit.component.module';
import { StudentAddComponent } from './student-add/student-add.component';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.page.html',
  styleUrls: ['./directory.page.scss'],
})
  
export class DirectoryPage implements OnInit {

  // Input for Specialty
  specForm = new FormControl('');

  show = false; //general visibility

  // visibility of elements for adding new ones
  showNewSpecialty = false;
  showNewStudent = false;

  // visibility of elements for editing 
  showEditSpecialty = false;
  showEditStudent = false;


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
    let studResult = this.fbservice.getRecordList(this.dbStudent, true); //observable for database Student
    studResult.snapshotChanges().subscribe() //subscribe to changes

    //connect to the Specialty database
    this.getData(this.dbSpecialty, false);
    //get specialties list
    let specResult = this.fbservice.getRecordList(this.dbSpecialty, false); //observable for database Specialty
    specResult.snapshotChanges().subscribe() //subscribe to changes 

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
        this.show = true;
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

  //toggle visibility of input fields for adding a new specialty
  addSpecialtyShow() {
    this.showNewSpecialty = true;
  }

  //toggle visibility of input fields for adding a new student
  addStudentShow() {
    this.showNewStudent = true;
  }

  //add and update  specialty
  addSpecialty() {
    let id: number = 0;
    let spec = new Specialty();
    
    if (this.specForm.value != null) { //check name input 
      spec.name = this.specForm.value;

      //create new Specialty in a database table
      if (this.showNewSpecialty) {
        spec.id = this.specialties.specialty.length + 1; //id in table
        this.showNewSpecialty = false;
        id = this.specialties.specialty.length; //key in database
      }

      //edit specialty
      else {
        if (this.showEditSpecialty) {
          spec.id = this.specialties.specialty[this.i].id; //current id
          id = this.specialties.specialty[this.i].id - 1;
          this.showEditSpecialty = false;
        }
      }
      this.fbservice.updateSpecialty(id, spec, this.dbSpecialty);
    }
  }

  //edit Specialty
  editSpecialtyShow() {
    this.showEditSpecialty = true;
    this.specForm.setValue(this.specialties.specialty[this.i].name);
  }

  //delete Specialty
  deleteSpecialty() {
    if (window.confirm('Are you sure you want to delete?')) {
      let key = this.specialties.specialty[this.i].id - 1;
      let id = this.specialties.specialty[this.i].id;
      let students = this.studentList.studentList.filter((student) => {
        return student.specialty_id == id; //find all students who have this specialty id
      });
      
      //delete all students related with this specialty
      students.forEach((student) => {
        let key = parseInt(student.id) - 1; //find student's id in database
        this.fbservice.deleteRecord(key.toFixed(), this.dbStudent);
      });

      //delete specialty
      this.fbservice.deleteRecord(key.toFixed(), this.dbSpecialty);
      this.nextSpecialty();
    }
  }

  addStudent(event: any) {
    if (event) {
    // generate new ID based on the highest existing ID
    let newId: number;
    if (this.studentList.studentList.length > 0) {
      newId = Math.max(...this.studentList.studentList.map(s => s.id)); //key in database == number of highest student's id (key = id - 1)
    } else {
      newId = 0;
    }

    // Assign the new ID to the student
    this.fbservice.updateStudent(newId, event, this.dbStudent);
    this.studentList.search(this.specialty.id);
    this.studentList.add(event);
    this.showNewStudent = false;
    }
  }

  deleteStudent(event: any) {
    if (event) this.nextSpecialty();
  }

  ngOnDestroy() {
    this.subscriptions
      .forEach(s => s.unsubscribe());
  }
}
