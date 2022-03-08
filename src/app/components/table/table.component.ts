import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {Programmer} from "../../interfaces/Programmer";
import {Position} from "../../enums/Position";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatBottomSheet} from "@angular/material/bottom-sheet";
import {PopupComponent} from "../popup/popup.component";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements AfterViewInit {
  displayedColumns: Array<String> = ['id', 'Firstname', 'Lastname', 'Middlename', 'Position', 'Date Of Birth', 'Active', 'operations'];
  dataSource = new MatTableDataSource<Programmer>(programmers);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private bottomSheet: MatBottomSheet) {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  remove(id: number): void {
    console.log(this.dataSource.data);
    this.dataSource.data = this.dataSource.data.filter(element => element.id !== id);
  }

  edit(id: number) {
    console.log(id);
    this.bottomSheet.open(PopupComponent);
  }
}

const programmers: Programmer[] = [
  {
    id: 1,
    firstName: 'Павел',
    lastName: 'Петров',
    middleName: '',
    position: Position.JUNIOR,
    dateOfBirth: '11/01/2001',
    active: true
  },
  {
    id: 12,
    firstName: 'Павел',
    lastName: 'Петров',
    middleName: '',
    position: Position.JUNIOR,
    dateOfBirth: '11/01/2001',
    active: true
  },
  {
    id: 13,
    firstName: 'Павел',
    lastName: 'Петров',
    middleName: '',
    position: Position.SENIOR,
    dateOfBirth: '11/01/2001',
    active: true
  },
  {
    id: 10,
    firstName: 'Павел',
    lastName: 'Петров',
    middleName: '',
    position: Position.MIDDLE,
    dateOfBirth: '11/01/2001',
    active: true
  },
  {
    id: 15,
    firstName: 'Павел',
    lastName: 'Петров',
    middleName: '',
    position: Position.MIDDLE,
    dateOfBirth: '11/01/2001',
    active: true
  },
  {
    id: 16,
    firstName: 'Павел',
    lastName: 'Петров',
    middleName: '',
    position: Position.MIDDLE,
    dateOfBirth: '11/01/2001',
    active: true
  }
]
