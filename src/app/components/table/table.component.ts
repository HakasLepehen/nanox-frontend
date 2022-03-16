import {ChangeDetectorRef, Component, EventEmitter, Input, Output} from '@angular/core';
import {Programmer} from '../../interfaces/Programmer';
import {Position} from '../../enums/Position';
import {
  MatBottomSheet,
  MatBottomSheetConfig,
} from '@angular/material/bottom-sheet';
import {PopupComponent} from '../popup/popup.component';
import {ActionType} from '../../enums/ActionType';
import {ProgrammerService} from "../../services/programmer.service";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers: [
    ProgrammerService
  ]
})
export class TableComponent {
  displayedColumns: Array<String> = [
    'id',
    'Firstname',
    'Lastname',
    'Middlename',
    'Position',
    'Date Of Birth',
    'Active',
    'operations',
  ];
  @Input() programmers: Array<Programmer> = [];

  @Output()
  onRemove: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private bottomSheet: MatBottomSheet,
  ) {}

  actionHandler(action: string, element?: Programmer): any {
    if (action === ActionType.EDIT) {
      console.log(element);
      const options = new MatBottomSheetConfig();
      options.data = {element};
      return this.bottomSheet.open(PopupComponent, options);
    }
    if (action === ActionType.ADD) {
      return this.bottomSheet.open(PopupComponent);
    }
    return;
  }

  deleteProgrammer(id: string) {
    this.onRemove.emit(id);
    console.log(`remove with id: ${id}`)
  }
}
