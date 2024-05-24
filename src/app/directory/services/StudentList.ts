import { Injectable } from '@angular/core';
import { Specialty } from './Specialty';
import { Student } from "./Student"; 
import { ConfigService } from "./config.service";

export class StudentList {
    studentList = new Array();
    //search result
    searchStudent = new Array();
    
    //service for observing speacialty changes 
    specialtySub = this.configService.specialty$
    //subscribe to changes
        .subscribe(() => {
            //get new value of specialty from a service
            let specialty = this.configService.specialty$.value;
            //if changes occured, search for all students with the current specialty
            if (specialty != undefined) this.search(specialty.id);
        });

    constructor(private configService: ConfigService) {}

    add(student: Student) {
        this.studentList.push(student);
        this.search(student.specialty_id);
    }

    //filter students by specialty
    search(spec_id: number) {
        if (spec_id != undefined) {
            this.searchStudent = this.studentList.filter((student) => {
                return student.specialty_id == spec_id;
            });
        }
    }
}


