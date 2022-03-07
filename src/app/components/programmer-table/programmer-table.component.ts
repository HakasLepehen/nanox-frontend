import { Component, Input } from '@angular/core';
import {Programmer} from "../../interfaces/Programmer";

@Component({
  selector: 'app-programmer-table',
  templateUrl: './programmer-table.component.html',
  styleUrls: ['./programmer-table.component.scss']
})

export class ProgrammerTableComponent {
  displayedColumns: Array<String> = ['id', 'Firstname', 'Lastname', 'Middlename', 'Position', 'Date Of Birth', 'Active', 'operations'];
  @Input() programmers!: Array<Programmer>;

  remove(id: number): void {
    this.programmers = this.programmers.filter(element => element.id !== id);
  }

  edit(id: number) {
    console.log(id);
  }
}
