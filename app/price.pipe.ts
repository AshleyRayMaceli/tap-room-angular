import { Pipe, PipeTransform } from 'angular2/core';
import { Keg } from './keg.model';

@Pipe({
  name: "price",
  pure: false
})
export class PricePipe implements PipeTransform {
  transform(input: Keg[], args) {
    var priceThreshold = 5;
    var desiredKegPrice = args[0];
    if (desiredKegPrice === "expensive") {
      return input.filter(function(keg) {
        return keg.price > priceThreshold;
      });
    } else if (desiredKegPrice === "cheap") {
      return input.filter(function(keg) {
        return keg.price <= priceThreshold;
      });
    } else {
      return input;
    }
  }
}
