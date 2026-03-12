import { CommonModule, NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, NgModule, OnInit } from '@angular/core';
import { PostService } from '../post';
import { AppError } from '../common/appErros';
import { NotFoundError } from '../common/notFoundError';
import { Observable, throwError } from 'rxjs';
import { App } from '../app';
import { BadInputError } from '../common/bad-input';


@Component({
  selector: 'post-component',
  standalone:true,
  imports: [CommonModule,NgFor,NgIf],
  templateUrl: './post-component.html',
  styleUrl: './post-component.css',
})
export class PostComponent implements OnInit {
    private service
     posts:any[]=[]
    constructor(service:PostService)
    {
     this.service=service;
    }
    createPost(input:HTMLInputElement)
    {
      let post:any ={
        title:input.value,
        isClicked:false
      };
      this.posts.splice(0,0,post);
      input.value='';
      this.service.create(post)
      .subscribe((response:any)=>{
        post['id']=response.id;

      }, (error:AppError)=>{
        this.posts.splice(0,1);
        if(error instanceof BadInputError)
        {
          alert("Bad input request")
        }
        alert("Unhandled exeption");
      }
    );
    }
    updatePost(input:HTMLInputElement,post:any)
    {
      let updatedPost:any={
        title:input.value,
        id : post.id,
        isClicked:false
      };

      this.service.update(updatedPost)
      .subscribe((response:any)=>{
        let index = this.posts.indexOf(post);
         this.posts.splice(index, 1, updatedPost);
         input.value='';
      })
    }
  dPost(post: any) {
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    this.service.delete(-1031313131)
    .subscribe({
      next: (response) => {
        null;
      },
      error: (error: AppError) => {
        this.posts.splice(index,0,post)
        if (error instanceof NotFoundError) {
          alert('object with this id not exist already');
        } else {
          alert('Unhandled exception');
          console.log(error.originalError);
        }
      }
    });
}
  ngOnInit(): void {
      this.service.getAll().subscribe((response:any)=>{
        this.posts=response
      },(error:any)=>{
        alert('An unexpected error occurred');
        console.log(error);
      });

    }
}
