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

  constructor(private programmerService: ProgrammerService) {
  }

  public ngOnInit() {
    this.programmerService
      .getAllProgrammers()
      .subscribe(
        programmers => this.programmers = programmers
      )
  }

  removeProgrammer(id: string) {
    this.programmerService
      .deleteProgrammer(id)
      .subscribe(() => {
        this.programmers = this.programmers.filter((t) => t.id !== id);
      })
  }

  addProgrammer(programmer: Programmer) {
    this.programmerService
      .createProgrammer(programmer)
      .subscribe(result => {
        this.programmers = this.programmers.concat(programmer);
        // this.programmers.push(result); // я не понимаю, почему простой пуш объекта в массив не работает?
                                          // думал что будет работать с ngOnchanges, но не получилось.
                                          // Либо реализация кривая была
      })
  }
}
