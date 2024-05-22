import { TestBed } from '@angular/core/testing';
import { ConfigService } from './config.service';
import { Specialty } from './Specialty';
import { SpecialtyList } from './SpecialtyList';
import { BehaviorSubject } from 'rxjs';

describe('ConfigService', () => {
    let service: ConfigService;
    let specialtyList: SpecialtyList;
    const DEFAULT_SPECIALTY: Specialty = { id: 0, name: "Computer Science" };

    beforeEach(() => {
        specialtyList = new SpecialtyList();
        TestBed.configureTestingModule({
            providers: [ConfigService]
        });
        service = TestBed.inject(ConfigService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should have the default specialty set correctly', () => {
        expect(service.currentSpecialty).toEqual(DEFAULT_SPECIALTY);
    });

    it('should initialize BehaviorSubject with the default specialty', () => {
        expect(service.specialty$.value).toEqual(DEFAULT_SPECIALTY);
    });

    it('should update the specialty correctly', () => {
        const newSpecialty: Specialty = { id: 121, name: "Software Engineering" };
        service.setSpecialty(newSpecialty);
        expect(service.specialty$.value).toEqual(newSpecialty);
    });
});
