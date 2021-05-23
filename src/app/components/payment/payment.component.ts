import { Component, OnInit } from '@angular/core';

import { FormControl } from '@angular/forms';
import { ValueService } from 'src/app/services/value.service';
import { Payment } from 'src/app/models/payment';

import { HttpClient }  from '@angular/common/http'
import { PaymentService } from 'src/app/services/payment.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  payment:Payment;
  apiUrl='https://localhost:44392/api/';
  constructor(public valueService:ValueService,private paymentService:PaymentService,private httpClient:HttpClient,private toastrService:ToastrService) { }

  ngOnInit(): void {
  }

  addPayment(){
    this.paymentService.addPayment(this.payment).subscribe(result=>{
      this.toastrService.success("Odeme işlemi başarıyla tamamlandı");
    })
  }
 
 

}