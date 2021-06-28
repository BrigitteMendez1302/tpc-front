import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Lesson } from '../pages/student/interfaces/lesson.interface';

@Injectable({
  providedIn: 'root'
})
export class LessonApiService {

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

  getAllLessons(): Observable<Lesson>{
    return this.http.get<Lesson>(this.basePath, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
  getLessonsByLessonTypeId(id:number):Observable<Lesson>{
    return this.http.get<Lesson>(`${this.basePath}lessons/filter?lessonTypeId=${id}`)
      .pipe(retry(2), catchError(this.handleError));
  }
  /*  getLessonById(id: number): Observable<Lesson> {
      return this.http.get<Lesson>(this.basePath + `lessons/${id}`, this.httpOptions)
        .pipe(retry(2), catchError(this.handleError));
    }*/
  updateLessonById(id:number, item:any): Observable<Lesson> {
    return this.http.put<Lesson>(this.basePath + `lessons/${id}`, item, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
  addLesson(tutorId: number, item: any): Observable<Lesson> {
    return this.http.post<Lesson>(this.basePath + `lessons${tutorId}`, item, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
  getLessonById(id:number):Observable<Lesson>{
    return this.http.get<Lesson>(`${this.basePath}lessons/${id}`)
      .pipe(retry(2), catchError(this.handleError));
  }
}
