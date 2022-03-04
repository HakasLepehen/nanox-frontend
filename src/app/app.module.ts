import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ProgrammerTitleComponent } from 'src/components/programmer-title/programmer-title.component';
import { ProgrammerTableComponent } from '../components/programmer-table/programmer-table.component';
import { TopBarComponent } from 'src/components/top-bar/top-bar.component';
import { MaterialModule } from 'src/material.module';

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
export class AppModule { }
