import { Injectable } from '@angular/core';
import {CarDetail} from '../models/carDetail';
import {CartItem} from '../models/cartItem';
import {CartItems} from '../models/cartItems';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addToCart(car:CarDetail)
  {
    let item=CartItems.find((c)=>c.carDetail.carId===car.carId);
    
    if(!item)
    {
      let cartItem=new CartItem();
      cartItem.carDetail=car;
      CartItems.push(cartItem)
    }
  }

  list():CartItem[]{
    return CartItems;
  }


  getUnitsInStock(car:CarDetail){
    car.brandId-=1;
  }

  removeFromCart(car:CarDetail){
    let item:any=CartItems.find((c)=>c.carDetail.carId===car.carId);
    CartItems.splice(CartItems.indexOf(item),1)
  }
 
}
