import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/carDetail';
import { CarImage } from 'src/app/models/carimage';
import { CardetailService } from 'src/app/services/cardetail.service';
import { CarimageService } from 'src/app/services/carimage.service';

@Component({
  selector: 'app-cardetails',
  templateUrl: './cardetails.component.html',
  styleUrls: ['./cardetails.component.css']
})
export class CardetailsComponent implements OnInit {
  currentCar:CarDetail;
  carDetails:CarDetail[]=[]
  carImages:CarImage[]=[]
  dataLoaded=false
  currentImage:CarImage
  Path="https://localhost:44392"

  constructor(
    private carDetailsService:CardetailService,
    private carImageService:CarimageService,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>
      {
        if(params["brandId"])
        {
          this.getCarsByBrand(params["brandId"])
        }
        else if(params["colorId"])
        {
          this.getCarsByColor(params["colorId"])
        }
        else if(params["carId"])
        {
          this.getCarImagesByCarId(params["carId"])
        }
        else
        {
          this.getCarDetails()
          this.getCarImages()
        }
      }
      )
    
  }

  setCurrentCar(car:CarDetail){

  
  this.currentCar=car;


  }

  getCarDetails(){
    this.carDetailsService.getCarDetails().subscribe(response=>{
      this.carDetails=response.data
      this.carImages=this.carDetails[0].carImage
      this.dataLoaded=true
    })

  }

  getCarImages(){
    this.carImageService.getImage().subscribe(response => {
      this.carImages=response.data
      this.dataLoaded=true
    })
  }

  getCarImagesByCarId(carId: number) {
    this.carImageService.getImagesById(carId).subscribe((response) => {
      this.carImages = response.data;
      this.dataLoaded = true;
    });
  }

  getCarsByBrand(brandId:number)
  {
    this.carDetailsService.getCarsByBrand(brandId).subscribe(response => {
      this.carDetails=response.data
      this.dataLoaded=true
    })
  }
  getCarsByColor(colorId:number)
  {
    this.carDetailsService.getCarsByColor(colorId).subscribe(response => {
      this.carDetails=response.data
      this.dataLoaded=true
    });
  }
  
  getCarDetailsByCarId(carId: number) {
    this.carDetailsService.getCarById(carId).subscribe((response) => {
      this.carDetails = response.data;
      this.dataLoaded = true;
    });
  }


  getCarByCarId(carId:number){
    this.carDetailsService.getCarById(carId).subscribe(response=>{
      this.carDetails=response.data
      this.dataLoaded=true;
    })
  }

  getCurrentImageClass(image: CarImage) {
    if (image == this.carImages[0]) {
      return 'carousel-item active';
    } else {
      return 'carousel-item';
    }
  }

  getButtonClass(image: CarImage) {
    if (image == this.carImages[0]) {
      return 'active';
    } else {
      return '';
    }
  }


}
