import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OffersService {
  getOffer(idProduct: number): number {
    console.log(idProduct);
    return idProduct % 2 === 0 ? 0.1 : 0;
  }
}
