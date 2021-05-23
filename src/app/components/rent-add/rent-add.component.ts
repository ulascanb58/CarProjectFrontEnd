import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CardetailService } from 'src/app/services/cardetail.service';
import { CartService } from 'src/app/services/cart.service';
import { ValueService } from 'src/app/services/value.service';
import {FormControl} from '@angular/forms';

import { HttpClient }  from '@angular/common/http'
import { PaymentService } from 'src/app/services/payment.service';
import { CarDetail } from 'src/app/models/carDetail';
@Component({
  selector: 'app-rent-add',
  templateUrl: './rent-add.component.html',
  styleUrls: ['./rent-add.component.css']
})
export class RentAddComponent implements OnInit {

  constructor(private carDetailService:CardetailService,
    public valueService:ValueService,
    private toastrService:ToastrService,
    private cartService:CartService) { 
    
  }

  ngOnInit(): void {
  }

  checkRentDate(rentDate: number, returnDate: number) {
    if (
      rentDate === this.valueService.rentDate.value &&
      returnDate === this.valueService.returnDate.value
    ) {
      this.toastrService.success('Başarılı');
      return true;
    } else {
      this.toastrService.error('Seçilen tarih aralığı dolu.');
      return false;
    }
  }

}
