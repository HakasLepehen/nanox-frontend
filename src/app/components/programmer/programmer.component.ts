import {Component, OnInit} from '@angular/core';
import {Programmer} from "../../interfaces/Programmer";
import {ProgrammerService} from "../../services/programmer.service";

@Component({
  selector: 'app-programmer',
  templateUrl: './programmer.component.html',
  styleUrls: ['./programmer.component.scss'],
  providers: [
    ProgrammerService,
  ]
})
export class ProgrammerComponent implements OnInit {

  programmers: Array<Programmer> = [];

  constructor(private programmerService: ProgrammerService) { }

  public ngOnInit() {
    this.programmerService.getAllProgrammers().subscribe(
      programmers => this.programmers = programmers
    )
  }
}
