import {Component, OnInit} from '@angular/core';
import {Programmer} from "../../interfaces/Programmer";
import {ProgrammerService} from "../../services/programmer.service";
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-programmer',
  templateUrl: './programmer.component.html',
  styleUrls: ['./programmer.component.scss'],
  providers: [
    ProgrammerService,
    ApiService
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

  remove(id: string) {
    this.programmerService
      .deleteProgrammer(id)
      .subscribe(( _) => {
        this.programmers = this.programmers.filter((t) => t.id !== id);
      })
  }
}
