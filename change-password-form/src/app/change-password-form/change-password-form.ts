import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PasswordValidator } from './change-password-validator';

@Component({
  selector: 'change-password-form',
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './change-password-form.html',
  styleUrl: './change-password-form.css',
})
export class ChangePasswordForm {
 form:FormGroup
 constructor(fb:FormBuilder)
 {
   this.form=fb.group({
    oldPassword:['',Validators.required,PasswordValidator.checkOldPasswordIsValid],
    newPassword:['',Validators.required],
    retypeNewPassword:['',Validators.required]
   },
   {
    validators:PasswordValidator.checkNewPasswordAndRetypedPasswordAreEqual
   });
 }
 get oldPassword(){return this.form.get('oldPassword')}
  get newPassword(){return this.form.get('newPassword')}
   get retypeNewPassword(){return this.form.get('retypeNewPassword')}
}
