import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Lesson } from '../pages/student/interfaces/lesson.interface';

@Injectable({
  providedIn: 'root'
})
export class LessonApiService {

  basePath ='http://localhost:3000/api/lesson';
  constructor(private http:HttpClient) { }
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'})};

  handleError(error: HttpErrorResponse): Observable<never> {
    if (error.error instanceof ErrorEvent) {
      console.log('An error occurred: ', error.error.message);
    }
    else {
      console.log(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    return throwError('Something happened with request, please try again later.');
  }

  getAllLessons(): Observable<Lesson>{
    return this.http.get<Lesson>(this.basePath)
      .pipe(retry(2), catchError(this.handleError));
  }
}
