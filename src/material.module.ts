import { NgModule } from "@angular/core";
import { MatTableModule } from '@angular/material/table';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatListModule} from "@angular/material/list";
import {MatBottomSheet} from "@angular/material/bottom-sheet";

@NgModule({
  exports: [
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    MatListModule
  ],
  providers: [
    MatBottomSheet
  ]
})

export class MaterialModule { }
