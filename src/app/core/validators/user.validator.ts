import {AbstractControl} from "@angular/forms";

export class UserValidator {
  static passwordValidate(control: AbstractControl) {
    return ((control.value.length) >= 6 ? true : null);
  }

  static nameValidator(control: AbstractControl) {
    return ((control.value.length) >= 1 ? true : null);
  }

  static surnameValidator(control: AbstractControl) {
    return ((control.value.length) >= 1 ? true : null);
  }
}
