import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './components/brand/brand.component';


import { CardetailsComponent } from './components/cardetails/cardetails.component';

import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { OnecardetailComponent } from './components/onecardetail/onecardetail.component';
import { RentalComponent } from './components/rental/rental.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: CardetailsComponent },
  { path: 'cars', component: CardetailsComponent },
  { path: 'rentals', component: RentalComponent },
  { path: 'customers', component: CustomerComponent },
  { path: 'brands', component: BrandComponent },
  { path: 'colors', component: ColorComponent },
  { path: 'cars/brand/:brandId', component: CardetailsComponent },
  { path: 'cars/color/:colorId', component: CardetailsComponent },
  { path: 'cars/onecardetail/:carId', component: OnecardetailComponent },
  {path:'cars/brand/:brandId/cars/onecardetail/:carId',component:OnecardetailComponent},
  {path:'cars/color/:colorId/cars/onecardetail/:carId',component:OnecardetailComponent},
  {path:"cars/brand/:brandId/color/:colorId",component: CardetailsComponent},
  {path:"cars/brand/:brandId/color/:colorId/cars/onecardetail/:carId",component: OnecardetailComponent},
  {path:"cars/cars/onecardetail/:carId",component:OnecardetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
