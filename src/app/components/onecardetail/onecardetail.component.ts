import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/carDetail';
import { CarImage } from 'src/app/models/carimage';
import { CardetailService } from 'src/app/services/cardetail.service';
import { CarimageService } from 'src/app/services/carimage.service';

@Component({
  selector: 'app-onecardetail',
  templateUrl: './onecardetail.component.html',
  styleUrls: ['./onecardetail.component.css']
})
export class OnecardetailComponent implements OnInit {

  cars:CarDetail[]=[]
  images:CarImage[]
  currentImage:CarImage
  dataLoaded=false
  Path="https://localhost:44392"

  constructor(private carDetailsService:CardetailService,
    private carImageService:CarimageService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params["carId"])
      {
        this.getCarById(params["carId"])  
      }
    })
    
    }

  
  getCarById(carId:number){
    this.carDetailsService.getCarById(carId).subscribe(response=>{
      this.cars=response.data
      this.dataLoaded=true
      this.images=this.cars[0].carImage
    })
  }
  getCurrentImageClass(image: CarImage) {
    if (image == this.images[0]) {
      return 'carousel-item active';
    } else {
      return 'carousel-item';
    }
  }

  getButtonClass(image: CarImage) {
    if (image == this.images[0]) {
      return 'active';
    } else {
      return '';
    }
  }


}
