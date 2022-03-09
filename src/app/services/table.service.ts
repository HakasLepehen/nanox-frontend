import { Injectable } from '@angular/core';
import {Programmer} from "../interfaces/Programmer";
import {Position} from "../enums/Position";

@Injectable({
  providedIn: 'root'
})
export class TableService {
  private programmers: Programmer[] = [
    {
      id: 1,
      firstName: 'Павел',
      lastName: 'Петров',
      middleName: '',
      position: Position.JUNIOR,
      dateOfBirth: '11/01/2001',
      active: true
    },
    {
      id: 12,
      firstName: 'Павел',
      lastName: 'Петров',
      middleName: '',
      position: Position.JUNIOR,
      dateOfBirth: '11/01/2001',
      active: true
    },
    {
      id: 13,
      firstName: 'Павел',
      lastName: 'Петров',
      middleName: '',
      position: Position.SENIOR,
      dateOfBirth: '11/01/2001',
      active: true
    },
    {
      id: 10,
      firstName: 'Павел',
      lastName: 'Петров',
      middleName: '',
      position: Position.MIDDLE,
      dateOfBirth: '11/01/2001',
      active: true
    },
    {
      id: 15,
      firstName: 'Павел',
      lastName: 'Петров',
      middleName: '',
      position: Position.MIDDLE,
      dateOfBirth: '11/01/2001',
      active: true
    },
    {
      id: 16,
      firstName: 'Павел',
      lastName: 'Петров',
      middleName: '',
      position: Position.MIDDLE,
      dateOfBirth: '11/01/2001',
      active: true
    }
  ]

  constructor() { }

  getData(): Array<Programmer> {
    return this.programmers;
  }

  remove(id: number) {
    this.programmers = this.programmers.filter(programmer => programmer.id !== id);
  }

  add(programmer: Programmer) {
    this.programmers = [...this.programmers, programmer];
  }
}
