import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from 'src/app/models/customer';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers:Customer[]=[];
  constructor(private customerService:CustomerService) { }

  ngOnInit(): void {
    this.getCustomers();
  }


  getCustomers(){
    this.customerService.getCustomers().subscribe(response=>{
      this.customers=response.data
    });

  }
}
