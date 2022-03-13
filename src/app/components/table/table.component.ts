import {Component} from '@angular/core';
import {Programmer} from "../../interfaces/Programmer";
import {Position} from "../../enums/Position";
import {MatBottomSheet, MatBottomSheetConfig} from "@angular/material/bottom-sheet";
import {PopupComponent} from "../popup/popup.component";
import {TableService} from "../../services/table.service";
import {ActionType} from "../../enums/actionType";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers: [
    TableService,
  ]
})

export class TableComponent {
  displayedColumns: Array<String> = ['id', 'Firstname', 'Lastname', 'Middlename', 'Position', 'Date Of Birth', 'Active', 'operations'];
  dataSource: Array<Programmer> = this.tableService.getData();
  subj = new BehaviorSubject(this.tableService.getData());


  constructor(private bottomSheet: MatBottomSheet, private tableService: TableService) {
  }

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

  getData(): void {
    this.dataSource = this.tableService.getData();
  }

  remove(id: number): void {
    this.tableService.remove(id);
    this.getData();
  }
}


