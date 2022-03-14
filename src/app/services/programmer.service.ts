import {Injectable} from '@angular/core';
import {Programmer} from '../interfaces/Programmer';
import {Position} from '../enums/Position';
import {Observable, Subject} from "rxjs";
import {ApiService} from "./api.service";

@Injectable()
export class ProgrammerService {

  constructor(
    private api: ApiService
  ) {
  }

  getAllProgrammers(): Observable<Programmer[]> {
    return this.api.getAllProgrammers();
  }
}
