import { Injectable } from "@angular/core";
import { Specialty } from "./Specialty";
import { SpecialtyList } from "./SpecialtyList";
import { Observable, BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class ConfigService {
    currentSpecialty = DEFAULT_SPECIALTY;
    //initialize behaviour subject
    specialty$: BehaviorSubject<Specialty> = new BehaviorSubject<Specialty>(DEFAULT_SPECIALTY);

    //change current specialty
    setSpecialty(specialty: Specialty) {
        this.specialty$.next(specialty) //generate next specialty from specialties list
    }

    constructor() {
    }
}

    //get initial specialty
var specialtyList = new SpecialtyList();
const DEFAULT_SPECIALTY = specialtyList.specialty.get(0);

