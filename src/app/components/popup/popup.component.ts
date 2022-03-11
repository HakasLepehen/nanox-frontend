import {Component, OnInit} from '@angular/core';
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
export class PopupComponent implements OnInit{
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

  ngOnInit() {
    this.formData = this._bottomSheetRef.containerInstance.bottomSheetConfig.data;
  }

  onSubmit(): void {
    console.log(this.formData);
    // this.tableService.add(this.formData.value);
    // this.formData.reset();
    this._bottomSheetRef.dismiss();
  }
}