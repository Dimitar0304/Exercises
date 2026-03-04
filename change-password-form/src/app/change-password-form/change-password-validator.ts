import { AbstractControl, ValidationErrors } from "@angular/forms";

export class PasswordValidator {

  static checkOldPasswordIsValid(control: AbstractControl): ValidationErrors | null {

    if (control.value !== '1234') {
      return { isOldPasswordInValid: true };
    }

    return null;
  }

  static checkNewPasswordAndRetypedPasswordAreEqual(
    control: AbstractControl
  ): ValidationErrors | null {

    const newPassword = control.get('newPassword')?.value;
    const retypedPassword = control.get('retypeNewPassword')?.value;

    if (newPassword !== retypedPassword) {
      return { areNewPasswordAndRetypedNotMatch: true };
    }

    return null;
  }
}
