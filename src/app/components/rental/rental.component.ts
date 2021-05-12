import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { RentalService } from 'src/app/services/rental.service';
import { Rental } from 'src/app/models/rental';
@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {

  constructor(private rentalService:RentalService) { }
  rentals:Rental[]=[];
  ngOnInit(): void {

    this.getRentals();
  }

  getRentals(){

    this.rentalService.getRentals().subscribe(response=>{
      this.rentals=response.data
    });
   

  }

}
