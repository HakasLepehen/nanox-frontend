import { Component, Input } from '@angular/core';
import {Programmer} from "../../interfaces/Programmer";
import {Position} from "../../enums/Position";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent {
  displayedColumns: Array<String> = ['id', 'Firstname', 'Lastname', 'Middlename', 'Position', 'Date Of Birth', 'Active', 'operations'];
  programmers: Array<Programmer> = [
    { id: 1, firstName: 'Павел', lastName: 'Петров', middleName: '', position: Position.JUNIOR, dateOfBirth: '11/01/2001', active: true },
    { id: 12, firstName: 'Павел', lastName: 'Петров', middleName: '', position: Position.JUNIOR, dateOfBirth: '11/01/2001', active: true },
    { id: 13, firstName: 'Павел', lastName: 'Петров', middleName: '', position: Position.SENIOR, dateOfBirth: '11/01/2001', active: true },
    { id: 11, firstName: 'Павел', lastName: 'Петров', middleName: '', position: Position.MIDDLE, dateOfBirth: '11/01/2001', active: true }
  ]

  remove(id: number): void {
    this.programmers = this.programmers.filter(element => element.id !== id);
  }

  edit(id: number) {
    console.log(id);
  }
}
