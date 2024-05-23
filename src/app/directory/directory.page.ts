import { Component, OnInit } from '@angular/core';
import { Student } from './services/Student';
import { Specialty } from './services/Specialty';
import { SpecialtyList } from './services/SpecialtyList';
import { StudentList } from './services/StudentList';
import { ConfigService } from './services/config.service';
import { Subscription } from 'rxjs';

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
  constructor() { }
  i = 0;
  ngOnInit() {
    // declare observable 
    const specSub = this.configService.specialty$
      //subscribe to changes and get current value
      .subscribe(() => {
        this.specialty = this.configService.specialty$.value;
      });
    //push observable into an array
    this.subscriptions.push(specSub);
  }

  nextSpecialty() {//if there is a next specialty
    if (this.i < this.specialties.specialty.size - 1) {
      this.i++;
    }

    else this.i = 0;
    //change specialty in service
    this.configService.setSpecialty(this.specialties.specialty.get(this.i));
  }

  addStudent(firstName: any, lastName: any, studentId: any, group: any, gpa: any) {
    let student = new Student();
    student.firstName = firstName;
    student.lastName = lastName;
    student.group = group;
    student.studentId = studentId;
    student.gpa = gpa;
    student.specialty_id = this.specialty.id;
    this.studentList.add(student);
  }

  addSpecialty(specialty: any) {
    let spec = new Specialty();
    spec.id = this.specialties.specialty.size;
    spec.name = specialty;
    this.specialties.add(spec);
  }

  ngOnDestroy() {
    this.subscriptions
      .forEach(s => s.unsubscribe());
  }
}
