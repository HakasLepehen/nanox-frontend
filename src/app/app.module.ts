import {NgModule, OnInit} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {ProgrammerTitleComponent} from 'src/app/components/programmer-title/programmer-title.component';
import {ProgrammerTableComponent} from './components/programmer-table/programmer-table.component';
import {TopBarComponent} from 'src/app/components/top-bar/top-bar.component';
import {MaterialModule} from 'src/material.module';
import {Programmer} from 'src/app/interfaces/Programmer';
import {Position} from 'src/app/enums/Position';

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
export class AppModule implements OnInit {

  ngOnInit(): void {

  }
}
