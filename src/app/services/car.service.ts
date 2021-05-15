import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Car } from '../models/car';


@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = 'https://localhost:44392/api/';
  
  constructor(private httpClient: HttpClient) {}

  getCars():Observable<ListResponseModel<Car>> {
    let newPath=this.apiUrl+"cars/getcardetails"
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByColorId(id:number):Observable<ListResponseModel<Car>>{
   let newPath=this.apiUrl+"cars/getcarsbycolorid?id="+id;

    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByBrandId(id:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/GetCarsByBrandId?id="+id;
 
     return this.httpClient.get<ListResponseModel<Car>>(newPath);
   }
 
}
