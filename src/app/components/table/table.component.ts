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
import {pipe} from "rxjs";

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
    private programmerService: ProgrammerService
  ) {}

  actionHandler(action: string, element?: Programmer): any {
    if (action === ActionType.EDIT) {
      return this.bottomSheet.open(PopupComponent, {data: element});
    }
    if (action === ActionType.ADD) {
      const bottomSheetRef = this.bottomSheet.open(PopupComponent);
      bottomSheetRef
        .afterDismissed()
        .subscribe(result => {
          const programmer = this.programmerService.createProgrammer(result)
          console.log('we are getting ', programmer)
        })
    }
    return;
  }

  deleteProgrammer(id: string) {
    this.onRemove.emit(id);
    console.log(`remove with id: ${id}`)
  }
}
