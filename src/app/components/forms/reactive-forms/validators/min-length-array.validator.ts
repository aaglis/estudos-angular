import { AbstractControl, ValidationErrors, ValidatorFn,FormArray } from "@angular/forms";

export function minLengthArray(minLength: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        if(control instanceof FormArray) {
            return control.controls.length >= minLength ? null : {minLengthArray: {valid: false}}
        }

        return null
    }
}