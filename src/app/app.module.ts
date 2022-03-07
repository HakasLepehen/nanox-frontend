import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {ProgrammerModule} from "./modules/programmer.module";
import {ProgrammerComponent} from './components/programmer/programmer.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgrammerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ProgrammerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }