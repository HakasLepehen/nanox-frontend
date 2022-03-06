import {Component, Input, OnInit} from '@angular/core';
import {Programmer} from "../../interfaces/Programmer";

// const ELEMENT_DATA: Array<Programmer> = [
//   { id: 1, firstName: 'Павел', lastName: 'Петров', middleName: '', position: Position.JUNIOR, dateOfBirth: '11/01/2001', active: true},
//   { id: 12, firstName: 'Павел', lastName: 'Петров', middleName: '', position: Position.JUNIOR, dateOfBirth: '11/01/2001', active: true},
//   { id: 13, firstName: 'Павел', lastName: 'Петров', middleName: '', position: Position.JUNIOR, dateOfBirth: '11/01/2001', active: true},
//   { id: 11, firstName: 'Павел', lastName: 'Петров', middleName: '', position: Position.JUNIOR, dateOfBirth: '11/01/2001', active: true}
// ];

@Component({
  selector: 'app-programmer-table',
  templateUrl: './programmer-table.component.html',
  styleUrls: ['./programmer-table.component.scss']
})

export class ProgrammerTableComponent implements OnInit {
  displayedColumns: Array<String> = ['id', 'firstName', 'lastName', 'middleName', 'position', 'dateOfBirth', 'active'];
  @Input() programmers!: Array<Programmer>;


  constructor() {
  }

  ngOnInit(): void {
  }

}
