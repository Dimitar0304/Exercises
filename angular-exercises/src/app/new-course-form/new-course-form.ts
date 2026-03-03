import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup,ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'new-course-form',
  imports: [NgFor,ReactiveFormsModule],
  templateUrl: './new-course-form.html',
  styleUrl: './new-course-form.css',
})
export class NewCourseForm {
  form
constructor(Fb:FormBuilder)
{
   this.form=Fb.group({
    name:Fb.control(Validators.required),
    contacts:Fb.group({
      email:[],
      phone:[]
    }),
    topics:Fb.array([])
   });
}

addTopic(topic:HTMLInputElement)
{
  (this.form.get('topics')as FormArray).push(new FormControl(topic.value));
  topic.value='';
}
onRemove(t:AbstractControl)
{
  let index = this.topics.controls.indexOf(t);
  this.topics.removeAt(index);
}
get topics() {
  return this.form.get('topics') as FormArray;
}

}
