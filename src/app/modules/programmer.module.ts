import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TopBarComponent} from "../components/top-bar/top-bar.component";
import {TableComponent} from "../components/table/table.component";
import {TitleComponent} from "../components/title/title.component";
import {MaterialModule} from "../../material.module";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ProgrammerComponent} from "../components/programmer/programmer.component";

@NgModule({
  declarations: [
    TopBarComponent,
    TableComponent,
    TitleComponent
  ],
  exports: [
    TableComponent,
    TopBarComponent,
    TitleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    MaterialModule
  ]
})
export class ProgrammerModule { }
