import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
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

  public createProgrammer(programmer: Programmer): Observable<Programmer> {
    return this.http.post<Programmer>(`${URL}/programmers`, programmer);
  }

  public editProgrammer(programmer: Programmer): Observable<Programmer> {
    return this.http.patch<Programmer>(`${URL}/programmers/${programmer.id}`, programmer);
  }

  public deleteProgrammer(id: string): Observable<null> {
    return this.http.delete<null>(`${URL}/programmers/${id}`)
  }

  // private handleError (error: Response | any) {
  //   console.error('ApiService::handleError', error);
  //   return Observable.throw(error);
  // }
}
