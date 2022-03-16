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

  public createProgrammer(programmer: Programmer): Observable<Programmer> {
    return this.http.post<Programmer>(`${URL}/programmers`, programmer);
  }

  public editProgrammer(programmer: Programmer): Observable<Programmer> {
    return this.http.patch<Programmer>(`${URL}/programmers/:id`, programmer);
  }

  public deleteProgrammer(id: string): Observable<null> {
    return this.http.delete<null>(`${URL}/programmers/${id}`)
  }

  // private handleError (error: Response | any) {
  //   console.error('ApiService::handleError', error);
  //   return Observable.throw(error);
  // }
}
