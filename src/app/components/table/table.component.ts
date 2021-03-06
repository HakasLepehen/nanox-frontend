import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Programmer} from '../../interfaces/Programmer';
import {Position} from '../../enums/Position';
import {MatBottomSheet} from '@angular/material/bottom-sheet';
import {PopupComponent} from '../popup/popup.component';
import {ActionType} from '../../enums/ActionType';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers: [
    // ProgrammerService
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

  @Output()
  onCreate: EventEmitter<Programmer> = new EventEmitter<Programmer>();

  @Output()
  onEdit: EventEmitter<Programmer> = new EventEmitter<Programmer>();

  constructor(
    private bottomSheet: MatBottomSheet
  ) {
  }

  actionHandler(action: string, element?: Programmer): any {
    if (action === ActionType.EDIT) {
      const bottomSheetRef = this.bottomSheet.open(PopupComponent, {data: element});

      bottomSheetRef
        .afterDismissed()
        .subscribe(data => this.onEdit.emit(data))
    }

    if (action === ActionType.ADD) {
      const bottomSheetRef = this.bottomSheet.open(PopupComponent);

      bottomSheetRef
        .afterDismissed()
        .subscribe(data => this.onCreate.emit(data))
    }

    return;
  }

  deleteProgrammer(id: string) {
    this.onRemove.emit(id);
  }
}
