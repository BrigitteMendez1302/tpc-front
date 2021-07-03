import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";
import {TutorTpc} from "../models/tutortpc";

@Injectable({
  providedIn: 'root'
})
export class TutorApiService {
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

  // Get Tutor Data
  getAllTutors(): Observable<any>{
    return this.http.get<any>(`${this.basePath}tutors`)
      .pipe(retry(2), catchError(this.handleError));
  }
  /*getUserById(id: number):Observable<TutorTpc>{
    return this.http.get<TutorTpc>(this.basePath+`tutors/${id}`, this.httpOptions)*/
  // Get Tutor by Id
  getUserById(id: number):Observable<any>{
    return this.http.get<any>(this.basePath+`tutors/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
}
