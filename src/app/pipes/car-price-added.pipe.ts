import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'carPriceAdded'
})
export class CarPriceAddedPipe implements PipeTransform {

  transform(value: number, rate: number): number {
    return value * rate + value * 3 ;
  }

}
