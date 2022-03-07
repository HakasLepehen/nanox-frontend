import { Component, Output } from '@angular/core';
import {Programmer} from "./interfaces/Programmer";
import {Position} from "./enums/Position";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nanoxFrontend';
}
