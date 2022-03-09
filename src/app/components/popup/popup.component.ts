import {Component} from '@angular/core';
import {MatBottomSheetRef} from "@angular/material/bottom-sheet";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent {
  formData = this.formBuilder.group({
    name: 'asdasd',
    address: ''
  });

  constructor(
    private _bottomSheetRef: MatBottomSheetRef<PopupComponent>,
    private formBuilder: FormBuilder
  ) { }

  onSubmit(): void {
    console.warn('Your order has been submitted', this.formData.value);
    this.formData.reset();
  }
}