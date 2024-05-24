import { Specialty } from "./Specialty";

export class SpecialtyList {
    public specialty = new Array();
    constructor() {}


    add(specialty: Specialty) {
        this.specialty.push(specialty);
    }
}