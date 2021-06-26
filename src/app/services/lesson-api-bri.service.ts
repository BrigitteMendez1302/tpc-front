import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {Lessontpc} from "../models/lessontpc";

@Injectable({
  providedIn: 'root'
})
export class LessonApiBriService {
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

  getLessonsByTutorIdAndLessonTypeIdAndInRange(tutorId: number, lessonTypeId: number,
                                               startDate: string, endDate: string): Observable<any>{
    return this.http.get(this.basePath+`lessons/filtered?start=${startDate}&end=${endDate}&tutorId=${tutorId}&lessonTypeId=${lessonTypeId}`);
  }
  getLessonById(lessonId: number): Observable<any>{
    return this.http.get(this.basePath+`lessons/${lessonId}`)
  }
  getLessonStudentsByLessonId(lessonId: number): Observable<any>{
    return this.http.get(this.basePath + `lessons/${lessonId}/lessonstudents`)
  }
}

