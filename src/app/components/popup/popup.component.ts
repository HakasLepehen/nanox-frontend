import {Component, Inject, OnInit} from '@angular/core';
import {MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef} from "@angular/material/bottom-sheet";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Position} from "../../enums/Position";
import {Programmer} from "../../interfaces/Programmer";

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent implements OnInit {
  form!: FormGroup;

  //positions are needed to transfer positions to the form
  positions: Array<Position> = [Position.JUNIOR, Position.MIDDLE, Position.SENIOR];

  constructor(
    private _bottomSheetRef: MatBottomSheetRef<PopupComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: Programmer
  ) {
  }

  ngOnInit(): void {
    //open form to edit Programmer
    if (this.data !== null) {
      this.form = new FormGroup({
        firstName: new FormControl(this.data.firstName, [Validators.required, Validators.maxLength(50)]),
        lastName: new FormControl(this.data.lastName, [Validators.required, Validators.maxLength(50)]),
        middleName: new FormControl(this.data.middleName, [Validators.maxLength(50)]),
        position: new FormControl(this.data.position, [Validators.required]),
        dateOfBirth: new FormControl(this.data.dateOfBirth, [Validators.required]),
      })
      return;
    }
    this.form = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      lastName: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      middleName: new FormControl('', [Validators.maxLength(50)]),
      position: new FormControl('', [Validators.required]),
      dateOfBirth: new FormControl(Date, [Validators.required]),
    })
    return;
  }

  onSubmit(): void {
    if (this.form.valid) {
      /* Add programmer */
      if (!this.data) {
        this._bottomSheetRef.dismiss(this.form.value);
      } else {
        /* Edit programmer */
        const programmer: Programmer = {id: this.data.id, ...this.form.value}
        this._bottomSheetRef.dismiss(programmer);
      }
    }
  }

  checkData(controlName: string, errorName: string): boolean {
    return this.form.controls[controlName].hasError(errorName);
  }
}