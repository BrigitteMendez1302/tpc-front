import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { LessonStudent } from '../models/lesson-student';

@Injectable({
  providedIn: 'root'
})
export class LessonStudentsApiService {
  basePath ='https://tpc-backend-deploy.herokuapp.com/api/';

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

  getAllLessonStudents(): Observable<LessonStudent>{
    return this.http.get<LessonStudent>(this.basePath)
      .pipe(retry(2), catchError(this.handleError));
  }
  // Create Lesson Student
  addLessonStudent(item: any): Observable<LessonStudent> {
    return this.http.post<LessonStudent>(`${this.basePath}lessons/{lessonId}/students/{studentId}`, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
}


