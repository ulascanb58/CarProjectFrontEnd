import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValueService {
  selectedColorId: number = 0;
  selectedBrandId: number = 0;
  isRentCarComponentActive: boolean = false;

  public rentDate= new FormControl("");
  public returnDate = new FormControl("");

  constructor() {}

  public getRentDate() {
    this.rentDate.setValue(this.rentDate.value);
  }

  public getReturnDate() {
    this.returnDate.setValue(this.returnDate.value);
  }
}
