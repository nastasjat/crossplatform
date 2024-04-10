import { AbstractControl, ValidatorFn } from "@angular/forms";
import { PriceService } from "./price.service";

export function priceValidator(): ValidatorFn {
    return (
        control: AbstractControl
    ): { [key: string]: boolean } | null => {
        let validator = new PriceService()

        let valid =
            !control.value || validator.validate_price(control.value)
        return valid ? null : {price: true}
    }
}