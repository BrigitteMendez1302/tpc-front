import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {TrainingTutor} from "../models/training-tutor";
import {catchError, retry} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class TrainingTutorService {
  basePath ='http://localhost:3000/api/trainingtutors';
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

// Create Student
  addTrainingTutor(item: any): Observable<TrainingTutor> {
    return this.http.post<TrainingTutor>(this.basePath, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
  // Get All Tutors by TrainingTutorId
  getAllTrainingTutors(): Observable<TrainingTutor> {
    return this.http.get<TrainingTutor>(this.basePath)
      .pipe(retry(2), catchError(this.handleError));
  }



}
