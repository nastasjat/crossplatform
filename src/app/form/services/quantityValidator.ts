import { QuantityService } from './quantity.service';
import { AbstractControl, ValidatorFn } from "@angular/forms";


export function qtyValidator(): ValidatorFn {
    return (
        control: AbstractControl
    ): { [key: string]: boolean } | null => {
        let validator = new QuantityService()

        let valid =
            !control.value || validator.validate_qty(control.value)
        return valid ? null : {unit: true}
    }
}