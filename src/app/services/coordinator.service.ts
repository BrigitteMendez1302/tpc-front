import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {Coordinator} from "../models/coordinator";
import {catchError, retry} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CoordinatorService {
  basePath = 'https://tpc-backend-deploy.herokuapp.com/api/';
  constructor(private http: HttpClient) { }
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

  // Get Coordinator by Id
  getCoordinatorById(id: number): Observable<Coordinator> {
    return this.http.get<Coordinator>(`${this.basePath}coordinators/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
  // // Create Coordinator
  // addCoordinator(item: any): Observable<Coordinator> {
  //   return this.http.post<Coordinator>(this.basePath, JSON.stringify(item), this.httpOptions)
  //     .pipe(retry(2), catchError(this.handleError));
  // }
  // // Get Coordinator Data
  // getAllCoordinators(): Observable<Coordinator>{
  //   return this.http.get<Coordinator>(this.basePath)
  //     .pipe(retry(2), catchError(this.handleError));
  // }
  // // Update Coordinator
  // updateCoordinator(id: number, item: Coordinator): Observable<Coordinator>{
  //   return this.http.put<Coordinator>(`${this.basePath}/${id}`, JSON.stringify(item), this.httpOptions)
  //     .pipe(retry(2), catchError(this.handleError));
  // }
  // // Delete Coordinator
  // deleteCoordinator(id: number): Observable<any> {
  //   return this.http.delete<Coordinator>(`${this.basePath}/${id}`, this.httpOptions)
  //     .pipe(retry(2), catchError(this.handleError));
  // }
}
