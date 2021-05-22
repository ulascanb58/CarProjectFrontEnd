import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandComponent} from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';

import { RentalComponent } from './components/rental/rental.component';
import { NaviComponent } from './components/navi/navi.component';
import { CardetailsComponent } from './components/cardetails/cardetails.component';
import { OnecardetailComponent } from './components/onecardetail/onecardetail.component';
import { CarPriceAddedPipe } from './pipes/car-price-added.pipe';

import {FormsModule} from "@angular/forms";
import { CarFilterPipePipe } from './pipes/car-filter-pipe.pipe';
import { BrandFilterPipePipe } from './pipes/brand-filter-pipe.pipe';
import { ColorFilterPipePipe } from './pipes/color-filter-pipe.pipe';

import {ToastrModule} from "ngx-toastr"

@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    ColorComponent,
    CustomerComponent,
    RentalComponent,
    NaviComponent,
    CardetailsComponent,
    OnecardetailComponent,
    CarPriceAddedPipe,
    CarFilterPipePipe,
    BrandFilterPipePipe,
    ColorFilterPipePipe
  

   
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
