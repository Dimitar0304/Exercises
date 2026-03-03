import { Component, NgModule, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault, NgFor } from '@angular/common';
import { CourseForm } from './course-form/course-form';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NewCourseForm } from './new-course-form/new-course-form';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule,NewCourseForm,CourseForm,SignupFormComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}

