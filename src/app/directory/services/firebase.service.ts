import { Injectable } from '@angular/core';
import { Specialty } from './Specialty';
import { Student } from './Student';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  studentListRef?: AngularFireList<any>;
  specialtyListRef?: AngularFireList<any>;
  dbRef?: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }

  //get single record
  getRecord(id: string, database: string) {
    this.dbRef = this.db.object('/' + database + id); //reference to an object
    console.log("dbRef=" + this.dbRef.snapshotChanges());
    return this.dbRef;
  }

  //get list of records
  getRecordList(database: string, operator: boolean) {
    if (operator) { //if true, get students
      this.studentListRef = this.db.list('/' + database);
      return this.studentListRef;
    }

    else { //if false, get specialties
      this.specialtyListRef = this.db.list('/' + database);
      return this.specialtyListRef;
    }
  }

  //update Student 
  updateStudent(id: number, student: Student, database: string) {
    this.dbRef = this.db.object('/' + database + '/' + id);
    return this.dbRef.update({
      id: student.id,
      specialty_id: student.specialty_id,
      firstName: student.firstName,
      lastName: student.lastName,
      gpa: student.gpa,
      studentId: student.studentId,
      group: student.group
    })
  }

  //for adding and updating specialties
  updateSpecialty(id: number, specialty: Specialty, database: string) {
    this.dbRef = this.db.object('/' + database + '/' + id);
    return this.dbRef.update({
      id: specialty.id,
      name: specialty.name
    })
  }

  //delete
  //add logic for deleting student and also deleting a specialty with all the students related to it
  deleteRecord(id: string, database: string) {
    this.dbRef = this.db.object('/' + database + '/' + id);
    this.dbRef.remove();
  }
}
