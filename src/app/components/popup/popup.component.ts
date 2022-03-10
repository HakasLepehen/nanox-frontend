import {Component} from '@angular/core';
import {MatBottomSheetRef} from "@angular/material/bottom-sheet";
import {FormBuilder} from "@angular/forms";
import {Position} from "../../enums/Position";
import {TableService} from "../../services/table.service";

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
  providers: [
    TableService
  ]
})
export class PopupComponent {
  formData = this.formBuilder.group({
    firstName: '',
    lastName: '',
    middleName: '',
    position: Position,
    dateOfBirth: '',
  });

  constructor(
    private _bottomSheetRef: MatBottomSheetRef<PopupComponent>,
    private formBuilder: FormBuilder,
    private tableService: TableService
  ) { }

  onSubmit(): void {
    this.tableService.add(this.formData.value);
    // this.formData.reset();
    this._bottomSheetRef.dismiss();
  }
}