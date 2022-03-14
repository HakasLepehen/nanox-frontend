import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Programmer} from "../interfaces/Programmer";

const URL = environment.apiURL;

@Injectable()
export class ApiService {

  constructor(
    private http: HttpClient
  ) {
  }

  getAllProgrammers(): Observable<Programmer[]> {
    return this.http.request<Programmer[]>('GET', `${URL}programmers`)
  }
}
