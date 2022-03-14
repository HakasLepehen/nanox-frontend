import {Component, OnInit, Output} from '@angular/core';
import {Programmer} from "../../interfaces/Programmer";
import {ProgrammerService} from "../../services/programmer.service";

@Component({
  selector: 'app-programmer',
  templateUrl: './programmer.component.html',
  styleUrls: ['./programmer.component.scss'],
  providers: [ProgrammerService]
})
export class ProgrammerComponent implements OnInit {

  @Output() programmers: Array<Programmer> = [];

  constructor(
    private programmerService: ProgrammerService
  ) { }

  ngOnInit(): void {
  }

}
