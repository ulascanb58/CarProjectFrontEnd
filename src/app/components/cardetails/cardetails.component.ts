import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { CarDetail } from 'src/app/models/carDetail';
import { CarImage } from 'src/app/models/carimage';
import { Color } from 'src/app/models/color';
import { Rental } from 'src/app/models/rental';
import { BrandService } from 'src/app/services/brand.service';
import { CardetailService } from 'src/app/services/cardetail.service';
import { CarimageService } from 'src/app/services/carimage.service';
import { CartService } from 'src/app/services/cart.service';
import { ColorService } from 'src/app/services/color.service';
import { RentalService } from 'src/app/services/rental.service';
import { ValueService } from 'src/app/services/value.service';

@Component({
  selector: 'app-cardetails',
  templateUrl: './cardetails.component.html',
  styleUrls: ['./cardetails.component.css'],
})
export class CardetailsComponent implements OnInit {
  currentCar: CarDetail;
  carDetails: CarDetail[] = [];
  carImages: CarImage[] = [];
  brands: Brand[] = [];
  colors: Color[] = [];
  filterBrandId: number = 0;
  filterColorId: number = 0;
  car: CarDetail;
  dataLoaded = false;
  currentImage: CarImage;
  filterText = '';
 

  Path = 'https://localhost:44392';

  constructor(
    private carDetailsService: CardetailService,
    private carImageService: CarimageService,
    private activatedRoute: ActivatedRoute,
    private colorService: ColorService,
    private brandService: BrandService,
    private toastrService: ToastrService,
    private rentalService: RentalService,
    private cartService:CartService,
    private valueService:ValueService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.getAllBrands();
      this.getAllColors();
      if(params['brandId'] && params['colorId']){
        this.getCarDetailByColorAndBrand(params['brandId'],params['colorId']);
      }
      else if (params['brandId']) {
        this.getCarsByBrand(params['brandId']);
      } else if (params['colorId']) {
        this.getCarsByColor(params['colorId']);
      } else if (params['carId']) {
        this.getCarImagesByCarId(params['carId']);
      } else {
        this.getCarDetails();
        this.getCarImages();
      }
    });
  }

 
  setCurrentCar(car: CarDetail) {
    this.currentCar = car;
  }

  getCarDetails() {
    this.carDetailsService.getCarDetails().subscribe((response) => {
      this.carDetails = response.data;
      this.carImages = this.carDetails[0].carImage;
      this.dataLoaded = true;
    });
  }

  getCarDetailByColorAndBrand(brandId: number, colorId: number) {
    this.carDetailsService
      .getCarDetailByColorAndBrand(brandId, colorId)
      .subscribe((response) => {
        console.log(response);
        this.carDetails = response.data;
        this.dataLoaded = true;
      });
  }
  getSelectedBrand(brandId: number) {
    if (this.filterBrandId == brandId) {
      return true;
    } else {
      return false;
    }
  }
  getSelectedColor(colorId: number) {
    if (this.filterColorId == colorId) {
      return true;
    } else {
      return false;
    }
  }

  getAllColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
    });
  }
  getAllBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
    });
  }

  getCarImages() {
    this.carImageService.getImage().subscribe((response) => {
      this.carImages = response.data;
      this.dataLoaded = true;
    });
  }

  getCarImagesByCarId(carId: number) {
    this.carImageService.getImagesById(carId).subscribe((response) => {
      this.carImages = response.data;
      this.dataLoaded = true;
    });
  }

  getCarsByBrand(brandId: number) {
    this.carDetailsService.getCarsByBrand(brandId).subscribe((response) => {
      this.carDetails = response.data;
      this.dataLoaded = true;
    });
  }
  getCarsByColor(colorId: number) {
    this.carDetailsService.getCarsByColor(colorId).subscribe((response) => {
      this.carDetails = response.data;
      this.dataLoaded = true;
    });
  }

  getCarDetailsByCarId(carId: number) {
    this.carDetailsService.getCarById(carId).subscribe((response) => {
      this.carDetails = response.data;
      this.dataLoaded = true;
    });
  }

  getCarByCarId(carId: number) {
    this.carDetailsService.getCarById(carId).subscribe((response) => {
      this.carDetails = response.data;
      this.dataLoaded = true;
    });
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
