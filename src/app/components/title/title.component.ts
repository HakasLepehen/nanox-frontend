import {Component} from "@angular/core";
import {MatBottomSheet} from "@angular/material/bottom-sheet";
import {PopupComponent} from "../popup/popup.component";

@Component({
  selector: 'app-title',
  template: `
    <div class="wrapper">
      <h1>Programmers</h1>
    </div>
  `,
  styleUrls: ['./title.component.scss']
})

export class TitleComponent {

  constructor() {
  }
}
