import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentalResponseModel } from '../models/rentalResponseModel';

@Injectable({
  providedIn: 'root',
})
export class RentalService {

  apiUrl="https://localhost:44392/api/rentals/getrentaldetails";
  constructor(private HttpClient: HttpClient) {}
  getRentals():Observable <RentalResponseModel>{
    
    return this.HttpClient.get<RentalResponseModel>(this.apiUrl);


  }
}
