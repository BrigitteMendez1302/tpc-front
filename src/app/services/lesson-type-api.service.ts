import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";
import {LessonType} from "../models/lessontypetpc";

@Injectable({
  providedIn: 'root'
})
export class LessonTypeApiService {
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

  // Get LessonType by Id
  getLessonTypeById(id: number): Observable<LessonType> {
    return this.http.get<LessonType>(`${this.basePath}lessontypes/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
  // Get LessonType Data
  getAllLessonTypes(): Observable<LessonType>{
    return this.http.get<LessonType>(`${this.basePath}lessontypes`)
      .pipe(retry(2), catchError(this.handleError));
  }
}

