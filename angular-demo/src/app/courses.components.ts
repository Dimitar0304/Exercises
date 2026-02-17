import { Component} from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { CoursesService } from "./courses.service";
import e from "express";
import { List } from "./list/list";
import { on } from "events";
import { Key } from "readline";

@Component({
    selector: 'courses',
    template: `
    <h1>Here load my custom components</h1>
    <ul>
      <li *ngFor="let course of courses">
          {{course}}
      </li>
      <div (click)="onDivClicked()">
      <button (click)="onSave($event)">Save</button>
      <input [value]="email" (keyup.enter)="email = $event.target.value; onKeyUp()"/>
      </div>

      //two binding data with banana in a box syntax
      <input [(ngModel)]="email" (keyup.enter)="onKeyUp()"/>

      <input (keyup.space)="onKeyUop()"/>
    </ul>
    `,
    standalone: true,
    imports: [CommonModule, FormsModule, List]
    })

export class CoursesComponent
{
   public courses: string[];
  isActive = false;
  constructor(service: CoursesService)
 {
    this.courses = service.getCourses();
 }
 onSave($event:Event) {
  //this stop the event from bubbling up to the div element and only trigger the button click event handler, preventing the div click event handler from being executed.
   $event.stopPropagation();
   //------------------------------------------
    console.log('Button was clicked',$event);
 }
onDivClicked()
 {
    event?.stopPropagation();
    console.log('Div was clicked');
 }
 onKeyUop()
 {
  console.log('Key was pressed');
 }
 email :string = 'me.example.com@gmail';
 onKeyUp()
 {
  console.log(this.email);
 }
}


