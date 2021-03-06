import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatBottomSheetRef} from "@angular/material/bottom-sheet";
import {FormBuilder} from "@angular/forms";
import {Position} from "../../enums/Position";
import {Programmer} from "../../interfaces/Programmer";

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent implements OnInit {
  formData = this.formBuilder.group({
    firstName: '',
    lastName: '',
    middleName: '',
    position: Position,
    dateOfBirth: Date,
  });

  //positions are needed to transfer positions to the form
  positions: Array<Position> = [Position.JUNIOR, Position.MIDDLE, Position.SENIOR];

  constructor(
    private _bottomSheetRef: MatBottomSheetRef<PopupComponent>,
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit(): void {
    if (this._bottomSheetRef.containerInstance.bottomSheetConfig.data !== null) {
      const programmer = this._bottomSheetRef.containerInstance.bottomSheetConfig.data;

      programmer.dateOfBirth = new Date(programmer.dateOfBirth);
      this.formData = this.formBuilder.group(programmer);
    }
  }

  onSubmit(): void {
    const programmer: Programmer = this.formData.value;
    this._bottomSheetRef.dismiss(programmer);
  }
}