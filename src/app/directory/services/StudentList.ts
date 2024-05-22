import { Injectable } from '@angular/core';
import { Specialty } from './Specialty';
import { Student } from "./Student"; 
import { ConfigService } from "./config.service";

export class StudentList {
    studentList = new Array();
    //search result
    searchStudent = new Array();
    searchStudentResult: string[] = [];
    
    //service for observing speacialty changes 
    specialtySub = this.configService.specialty$
    //subscribe to changes
        .subscribe(() => {
            //get new value of specialty from a service
            let specialty = this.configService.specialty$.value;
            //if changes occured, search for all students with the current specialty
            this.search(specialty.id);
        });

    constructor(private configService: ConfigService) {
        let student = new Student();
        student.specialty_id = 0;
        student.firstName = "Lesia";
        student.lastName = 'Roznovska';
        student.group = 'KN-43';
        student.studentId = 12455;
        student.gpa = 93.6;
        this.add(student);

        let student1 = new Student();
        student1.specialty_id = 1;
        student1.firstName = "Andrii";
        student1.lastName = 'Sendziuk';
        student1.group = 'SE-51';
        student1.studentId = 14532;
        student1.gpa = 97.2;
        this.add(student1);
        this.search(0);
    }

    add(student: Student) {
        this.studentList.push(student);
        this.search(student.specialty_id);
    }

    //filter students by specialty
    search(spec_id: number) {
        this.searchStudent = this.studentList.filter((student) => {
            return student.specialty_id == spec_id;
        })
        console.log('searchStudent:', this.searchStudent); 
        
        this.searchStudentResult = [];
        this.searchStudent.forEach(i => {
            this.searchStudentResult.push(`First Name: ${i.firstName}`);
            this.searchStudentResult.push(`Last Name: ${i.firstName}`);
            this.searchStudentResult.push(`Student ID: ${i.firstName}`);
            this.searchStudentResult.push(`Group: ${i.firstName}`);
            this.searchStudentResult.push(`GPA: ${i.firstName}`);
        })
    }
}


