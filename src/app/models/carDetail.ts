import { CarImage } from "./carimage";

export interface CarDetail {
    carId:number,
    model:string,
    colorId:number,
    brandName:string,
    colorName:string,
    modelYear:number,
    price:number,
    description:string,
    imagePath:string,
    carImage:CarImage[]
} 