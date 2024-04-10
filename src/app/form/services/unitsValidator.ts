import { AbstractControl, ValidatorFn } from "@angular/forms";
import { UnitsService } from "./units.service";

export function unitsValidator(): ValidatorFn {
    return (
        control: AbstractControl
    ): { [key: string]: boolean } | null => {
        let validator = new UnitsService()

        let valid =
            !control.value || validator.validate_units(control.value)
        return valid ? null : {unit: true}
    }
}