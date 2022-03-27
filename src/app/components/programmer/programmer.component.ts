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
      .subscribe({
        next: value => this.programmers = value,
        /* here we should think of creating some kind of handler which
        would periodically poll the server in the event of an error */
        error: err => alert(err.message)
      })
  }

  removeProgrammer(id: string) {
    this.programmerService
      .deleteProgrammer(id)
      .subscribe({
        next: () => {
          // @ts-ignore
          this.programmers = this.programmers.filter((t) => t.id !== id);
        }
      })
  }

  addProgrammer(programmer: Programmer) {
    console.log('create programmer with data ', programmer)
    if (programmer !== undefined) {
      this.programmerService
        .createProgrammer(programmer)
        .subscribe({
          next: value => this.programmers = [...this.programmers, value],
          error: err => alert(err.message)
        })
    }
  }

  editProgrammer(programmer: Programmer) {
    if (programmer !== undefined) {
      this.programmerService
        .editProgrammer(programmer)
        .subscribe(
          result => {
            this.programmers = this.programmers.map(el =>
              el.id == result.id ? el = result : el
            )
          }
        )
    }
  }
}
