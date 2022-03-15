import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {map, Observable, throwError} from "rxjs";
import {Programmer} from "../interfaces/Programmer";

const URL = environment.apiURL;

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

  createProgrammer(programmer: Programmer): void {
    this.http.post(`${URL}/programmers`, programmer);
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
