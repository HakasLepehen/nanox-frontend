import { NgModule, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatePipe } from '@angular/common';

import { AppComponent } from './app.component';
import { ProgrammerTitleComponent } from 'src/components/programmer-title/programmer-title.component';
import { ProgrammerTableComponent } from '../components/programmer-table/programmer-table.component';
import { TopBarComponent } from 'src/components/top-bar/top-bar.component';
import { MaterialModule } from 'src/material.module';
import { Programmer } from 'src/interfaces/Programmer';
import { Position } from 'src/enums/Position';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ProgrammerTableComponent,
    ProgrammerTitleComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule implements OnInit{
  programmers: Array<Programmer> = [];

  ngOnInit(): void {
    this.programmers = [
      { id: 1, firstName: 'Павел', lastName: 'Петров', middleName: '', position: Position.JUNIOR, active: true},
      { id: 12, firstName: 'Павел', lastName: 'Петров', middleName: '', position: Position.JUNIOR, active: true},
      { id: 13, firstName: 'Павел', lastName: 'Петров', middleName: '', position: Position.JUNIOR, active: true},
      { id: 11, firstName: 'Павел', lastName: 'Петров', middleName: '', position: Position.JUNIOR, active: true}
    ]
  }
}
