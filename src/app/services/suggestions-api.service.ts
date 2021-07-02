import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";
import { Suggestion } from "../models/suggestion";

@Injectable({ providedIn: 'root' })
export class SuggestionsApiService {
  basePath = 'https://tpc-backend-deploy.herokuapp.com/api/suggestions';
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
  constructor(private http: HttpClient) {
  }
  getAllSuggestions(): Observable<any> {
    return this.http.get<any>(this.basePath, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }


}
