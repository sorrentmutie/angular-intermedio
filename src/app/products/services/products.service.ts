import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable, map, of } from 'rxjs';
import { OffersService } from './offers.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient , private offersService: OffersService) { }

  private getProducts(): Product[] {
    return [
      { id: 1, name: 'Product 1', price: 100 * (1 - this.offersService.getOffer(1)) },
      { id: 2, name: 'Product 2', price: 200 * (1 - this.offersService.getOffer(2)) },
      { id: 3, name: 'Product 3', price: 300 * (1 - this.offersService.getOffer(3)) },
    ]
  }

   getProductsAsObservable(): Observable<Product[]> {
      return of(this.getProducts());
   }

   getProductsAsObservableFromApi(): Observable<Product[]> {
      //return this.http.get<Product[]>(`http://localhost:3000/products`);
      const myObs$ = this.http.get<Product[]>(`http://localhost:3000/products`);
      return myObs$.pipe(
        map ((products: Product[]) => {
          return products.map( product => {
           return  {id: product.id, name: product.name, price: product.price * (1 - this.offersService.getOffer(product.id))}
          })}));
   }

   getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`http://localhost:3000/products/${id}`);
   }

}
