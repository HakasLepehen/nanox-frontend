import { Injectable } from '@angular/core';
import { Programmer } from '../interfaces/Programmer';
import { Position } from '../enums/Position';
import {Subject} from "rxjs";

@Injectable()
export class ProgrammerService {
  private programmers: Programmer[] = [
    {
      id: 1,
      firstName: 'Павел',
      lastName: 'Петров',
      middleName: 'Валериевич',
      position: Position.JUNIOR,
      dateOfBirth:
        'Thu Mar 10 2022 00:00:00 GMT+0600 (Омск, стандартное время)',
      active: true,
    },
    {
      id: 2,
      firstName: 'Павел',
      lastName: 'Петров',
      middleName: 'Михайлович',
      position: Position.SENIOR,
      dateOfBirth:
        'Thu Mar 10 2022 00:00:00 GMT+0600 (Омск, стандартное время)',
      active: true,
    }
  ];

  constructor() {
  }

  getData(): Array<Programmer> {
    return this.programmers;
  }

  remove(id: number): void {
  }

  add(programmer: Programmer) {
    this.programmers.push(programmer);
  }

  edit(id: Programmer) {
    this.programmers.map((el, index) => {
      if (el.id === id.id) {
        this.programmers[index] = id;
        return;
      }
      console.log('Done');
    });
  }
}
