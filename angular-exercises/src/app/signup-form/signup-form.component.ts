import { NgIf } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UsernameValidations } from './username.validation';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule,NgIf]
})
export class SignupFormComponent {
  form = new FormGroup({
    username:new FormControl('',[
      Validators.required,
      Validators.minLength(3),
      UsernameValidations.cannotExistWhiteSpace,
    ],

    UsernameValidations.shouldBeUnique
  ),
    password:new FormControl('',[
      Validators.required,
      Validators.minLength(3),
    ],
    )
  })

  get username(){
    return this.form.get('username');
  }
  logOn()
  {
    console.log(this.username);
  }
  onSubmit()
  {
    this.form.setErrors({
      ivalidLogin :true
    })
  }
}
