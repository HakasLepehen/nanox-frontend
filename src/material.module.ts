import { NgModule } from "@angular/core";
import { MatTableModule } from '@angular/material/table';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  exports: [
    MatTableModule,
    MatButtonModule,
    MatIconModule
  ]
})

export class MaterialModule { }
