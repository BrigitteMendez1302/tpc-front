import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {Tutor} from "../models/tutor";
import {catchError, retry} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class TutorService {
  // Students Endpoint
  basePath = 'http://localhost:3000/api/tutor';
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
  // Create Tutor
  addTutor(item: any): Observable<Tutor> {
    return this.http.post<Tutor>(this.basePath, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
  // Get Tutor by Id
  getTutorById(id: number): Observable<Tutor> {
    return this.http.get<Tutor>(`${this.basePath}/${id}`, this.httpOptions )
      .pipe(retry(2), catchError(this.handleError));
  }
  // Get Tutor Data
  getAllTutors(): Observable<Tutor>{
    return this.http.get<Tutor>(this.basePath)
      .pipe(retry(2), catchError(this.handleError));
  }
  // Update Tutor
  updateTutor(id: number, item: Tutor): Observable<Tutor>{
    return this.http.put<Tutor>(`${this.basePath}/${id}`, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
  // Delete Tutor
  deleteTutor(id: number): Observable<any> {
    return this.http.delete<Tutor>(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }}
