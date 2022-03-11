import {Component, OnInit} from '@angular/core';
import {Programmer} from "../../interfaces/Programmer";
import {Position} from "../../enums/Position";
import {MatBottomSheet, MatBottomSheetConfig} from "@angular/material/bottom-sheet";
import {PopupComponent} from "../popup/popup.component";
import {TableService} from "../../services/table.service";
import {ActionType} from "../../enums/actionType";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers: [
    TableService
  ]
})

export class TableComponent implements OnInit {
  displayedColumns: Array<String> = ['id', 'Firstname', 'Lastname', 'Middlename', 'Position', 'Date Of Birth', 'Active', 'operations'];
  dataSource: Array<Programmer> = [];

  constructor(private bottomSheet: MatBottomSheet, private tableService: TableService) {
  }

  ngOnInit() {
    this.getData();
  }

  actionHandler(action: string, element?: Programmer): any {
    if (action === ActionType.EDIT) {
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


