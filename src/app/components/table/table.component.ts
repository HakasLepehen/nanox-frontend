import {Component, OnInit} from '@angular/core';
import {Programmer} from "../../interfaces/Programmer";
import {Position} from "../../enums/Position";
import {MatBottomSheet} from "@angular/material/bottom-sheet";
import {PopupComponent} from "../popup/popup.component";
import {TableService} from "../../services/table.service";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers: [
    TableService
  ]
})

export class TableComponent implements OnInit{
  displayedColumns: Array<String> = ['id', 'Firstname', 'Lastname', 'Middlename', 'Position', 'Date Of Birth', 'Active', 'operations'];
  dataSource: Array<Programmer> = [];

  constructor(private bottomSheet: MatBottomSheet, private tableService: TableService) {
  }

  ngOnInit() {
    this.getData();
  }

  add() {
    this.bottomSheet.open(PopupComponent);
    // this.tableService.add(programmer);
    this.getData();
  }

  getData(): void {
    this.dataSource = this.tableService.getData();
  }

  remove(id: number): void {
    this.tableService.remove(id);
    this.getData();
  }

  edit(id: number) {
    this.bottomSheet.open(PopupComponent);
  }
}


