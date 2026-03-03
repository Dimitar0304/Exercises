import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'course-form',
  imports: [FormsModule,CommonModule],
  templateUrl: './course-form.html',
  styleUrl: './course-form.css',
  standalone:true
})
export class CourseForm {
  //required and have to min 3 chars for name
  name='';
  //requred field
  //dropdown list
  //Development
  //Art
  //Language
  categories=[
    {id:1,name:"Development"},
    {id:2,name:"Art"},
    {id:3,name:"Language"}
  ];
  category={};
  onSubmit(form:object)
  {
    console.log(form);
  }

}
