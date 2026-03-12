import { HttpClientModule } from '@angular/common/http';
import { Component, ErrorHandler, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostComponent } from './post-component/post-component';
import {  PostService } from './post';
import { AppErrorHandler } from './common/app-error-handler';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [HttpClientModule,PostComponent],
  providers:[PostService,{provide:ErrorHandler,useClass:AppErrorHandler}],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('http-consuming-services');
}
