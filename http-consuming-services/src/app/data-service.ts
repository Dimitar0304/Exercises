import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, pipe, throwError } from 'rxjs';
import { NotFoundError } from './common/notFoundError';
import { AppError } from './common/appErros';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient)
    {
    }
    url:string ='';
    getAll()
    {
      return  this.http.get(this.url)
      .pipe(catchError(this.handleError))
    }
    create(resourse:HTMLInputElement)
    {
      return this.http.post(this.url,resourse)
      .pipe(catchError(this.handleError));
    }
    update(resourse:any)
    {
      return this.http.put(this.url,+'/'+resourse.id,resourse).
      pipe(catchError(this.handleError));
    }
    delete(id:any)
    {
     return this.http.delete(this.url+'/'+id)
     .pipe(catchError(this.handleError));
    }

    private handleError(error:Response)
    {
      if(error.status==404)
        {
         return throwError(()=>new NotFoundError());
        }
        return throwError(() => error);
  }
}
