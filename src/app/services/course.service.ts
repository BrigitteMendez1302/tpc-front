import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";
import {Coursetpc} from "../models/coursetpc";

@Injectable({
  providedIn: 'root'
})
export class CourseApiService {
  // Students Endpoint
  basePath = 'https://tpc-backend-deploy.herokuapp.com/api/courses';
  constructor(private http: HttpClient) { }
  // HTTP Default Options
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'})};
  // API Error Handling
  handleError(error: HttpErrorResponse): Observable<never> {
    if (error.error instanceof ErrorEvent) {
      console.log('An error occurred: ', error.error.message);
    }
    else {
      console.log(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    return throwError('Something happened with request, please try again later.');
  }

  // Get Course by Id
  getCourseById(id: number): Observable<Coursetpc> {
    return this.http.get<Coursetpc>(`${this.basePath}/${id}`, this.httpOptions )
      .pipe(retry(2), catchError(this.handleError));
  }
  // Get Course Data
  getAllCourses(): Observable<Coursetpc>{
    return this.http.get<Coursetpc>(this.basePath)
      .pipe(retry(2), catchError(this.handleError));
  }
  }
