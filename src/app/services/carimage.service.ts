import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from '../models/carimage';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarimageService {

  apiUrl ="https://localhost:44392/api/"
  constructor(private httpClient : HttpClient) { }

  getImage():Observable<ListResponseModel<CarImage>>{
    let newPath=this.apiUrl+"carimages/getall"
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }

  getImagesById(carId:number):Observable<ListResponseModel<CarImage>>{
    let newPath = this.apiUrl+"carimages/getbycarid?carid="+carId
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }
}
