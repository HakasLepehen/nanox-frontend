import { Component, Output } from '@angular/core';
import {Programmer} from "./interfaces/Programmer";
import {Position} from "./enums/Position";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  programmers: Array<Programmer> = [
    { id: 1, firstName: 'Павел', lastName: 'Петров', middleName: '', position: Position.JUNIOR, dateOfBirth: '11/01/2001', active: true },
    { id: 12, firstName: 'Павел', lastName: 'Петров', middleName: '', position: Position.JUNIOR, dateOfBirth: '11/01/2001', active: true },
    { id: 13, firstName: 'Павел', lastName: 'Петров', middleName: '', position: Position.SENIOR, dateOfBirth: '11/01/2001', active: true },
    { id: 11, firstName: 'Павел', lastName: 'Петров', middleName: '', position: Position.MIDDLE, dateOfBirth: '11/01/2001', active: true }
  ]
  title = 'nanoxFrontend';
}
