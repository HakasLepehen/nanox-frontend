import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProgrammerTitleComponent} from "../programmer-title/programmer-title.component";
import {ProgrammerTableComponent} from "./programmer-table.component";

@NgModule({
  declarations: [
    ProgrammerTitleComponent,
    ProgrammerTableComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProgrammerTableModule { }
