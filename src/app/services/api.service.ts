import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {Programmer} from "../interfaces/Programmer";

const URL = environment.apiURL;

const programmer: Programmer = {
  "id": "d9e4b36f-abd2-41b7-ab1a-227ef38f2677",
  "firstName": "Павел",
  "lastName": "Петров",
  "middleName": "Валериевич",
  "position": "Junior",
  "dateOfBirth": "Thu Mar 10 2022 00:00:00 GMT+0600 (Омск, стандартное время)",
  "active": true
}

@Injectable()
export class ApiService {

  constructor(
    private http: HttpClient
  ) {
  }

  getAllProgrammers(): Observable<Programmer[]> {
    return this.http
      .get<Programmer[]>(`${URL}/programmers`);
  }

  createProgrammer(programmer: Programmer): Observable<Programmer> {
    return this.http.post<Programmer>(`${URL}/programmers`, programmer);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
