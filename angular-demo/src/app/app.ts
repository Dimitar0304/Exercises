import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoursesComponent } from './courses.components';
import { NgFor } from '@angular/common';
import { CoursesService } from './courses.service';
import { FormsModule } from '@angular/forms';
import { PipesComponent } from './pipes.component';
import { SummaryPipe } from './summary.pipe';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CoursesComponent,FormsModule,PipesComponent,SummaryPipe],
  providers: [CoursesService],
  templateUrl: './app.html',
  styleUrl: './app.sass'
})
export class App {
  protected readonly title = signal('angular-demo');
}
