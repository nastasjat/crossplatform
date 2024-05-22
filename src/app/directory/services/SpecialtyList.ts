import { Specialty } from "./Specialty";

export class SpecialtyList {
    public specialty = new Map();
    constructor() {
        this.specialty.set(0, { id: 0, name: "Computer Science" });
        this.specialty.set(1, { id: 1, name: "Software Engineering" });
    }

    add(specialty: Specialty) {
        this.specialty.set(specialty.id, { id: specialty.id, name: specialty.name });
    }
}