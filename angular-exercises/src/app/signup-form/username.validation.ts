import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UsernameValidations {

  static cannotExistWhiteSpace(
    control: AbstractControl
  ): ValidationErrors | null {

    if ((control.value as string)?.indexOf(' ') >= 0) {
      return { cannotExistWhiteSpace: true };
    }

    return null;
  }

  static shouldBeUnique(
    control: AbstractControl
  ): Promise<ValidationErrors | null> {
      console.log('Async validator running...');

    return new Promise(resolve => {
      setTimeout(() => {
        if (control.value === 'mitko') {
          console.log('Checking value:', control.value);
          resolve({ shouldBeUnique: true });
        } else {
          resolve(null);
        }
      }, 2000);
    });
  }
}
