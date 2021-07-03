import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LessonStudentsApiBriService {
  basePath = 'https://tpc-backend-deploy.herokuapp.com/api/';

  constructor(private http: HttpClient) { }

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
  getCommentsByLessonId(lessonId: number, isComplaint: boolean): Observable<any>{
    return this.http.get(this.basePath+`lessons/${lessonId}/lessonstudents/complaint?isComplaint=${isComplaint}`);
  }
  getCommentByLessonIdAndStudentId(lessonId: number, studentId: number){
    return this.http.get(this.basePath+`lessons/${lessonId}/students/${studentId}`)
  }
  updateLessonStudentAttendance(lessonId: number, studentId: number, attendance: boolean){
    return this.http.put(this.basePath+`lessonstudents/${lessonId}/students/${studentId}?attendance=${attendance}`,this.httpOptions);
  }
}
