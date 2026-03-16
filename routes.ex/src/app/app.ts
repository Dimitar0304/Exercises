import { Component, ErrorHandler, signal } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArchiveComponent } from './archive/archive.component';


@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterLink,RouterOutlet,RouterModule,HomeComponent,ArchiveComponent],
  providers:[],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('http-consuming-services');
}
