import {Injectable, Output} from '@angular/core';
import {Programmer} from "../interfaces/Programmer";
import {Position} from "../enums/Position";
import {BehaviorSubject} from "rxjs";

@Injectable()
export class TableService {
  private programmers: Programmer[] = [
    {
      id: 1,
      firstName: 'Павел',
      lastName: 'Петров',
      middleName: 'Валериевич',
      position: Position.JUNIOR,
      dateOfBirth: 'Thu Mar 10 2022 00:00:00 GMT+0600 (Омск, стандартное время)',
      active: true
    },
    {
      id: 12,
      firstName: 'Павел',
      lastName: 'Петров',
      middleName: 'Иванович',
      position: Position.JUNIOR,
      dateOfBirth: 'Thu Jul 16 1998 00:00:00 GMT+0700 (Омск, летнее время)',
      active: true
    },

    {
      id: 13,
      firstName: 'Павел',
      lastName: 'Петров',
      middleName: 'Петрович',
      position: Position.SENIOR,
      dateOfBirth: '11/01/2001',
      active: true
    },
    // {
    //   id: 10,
    //   firstName: 'Павел',
    //   lastName: 'Петров',
    //   middleName: '',
    //   position: Position.MIDDLE,
    //   dateOfBirth: '11/01/2001',
    //   active: true
    // },
    // {
    //   id: 15,
    //   firstName: 'Павел',
    //   lastName: 'Петров',
    //   middleName: '',
    //   position: Position.MIDDLE,
    //   dateOfBirth: '11/01/2001',
    //   active: true
    // },
    // {
    //   id: 16,
    //   firstName: 'Павел',
    //   lastName: 'Петров',
    //   middleName: '',
    //   position: Position.MIDDLE,
    //   dateOfBirth: '11/01/2001',
    //   active: true
    // }
  ]

  constructor() {
  }

  getData(): Array<Programmer> {
    return this.programmers;
  }

  remove(id: number) {
    this.programmers = this.programmers.filter(programmer => programmer.id !== id);
  }

  add(programmer: Programmer) {
    this.programmers.push(programmer);
    console.log('added new programmer', this.programmers);
  }

  edit(id: Programmer) {
    this.programmers.map((el, index) => {
      if (el.id === id.id) {
        this.programmers[index] = id;
        return;
      }
      return;
    });
    console.log(this.programmers);
  }
}
