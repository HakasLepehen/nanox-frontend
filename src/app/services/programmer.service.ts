import {Injectable} from '@angular/core';
import {Programmer} from '../interfaces/Programmer';
import {Observable} from "rxjs";
import {ApiService} from "./api.service";

@Injectable()
export class ProgrammerService {

  constructor(private api: ApiService) {
  }

  getAllProgrammers(): Observable<Programmer[]> {
    return this.api.getAllProgrammers();
  }
}
