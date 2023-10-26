import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product';
import { Observable, Subscription } from 'rxjs';
import { CustomersService } from 'src/app/customers/customers.service';
import { Customer } from 'src/app/customers/customer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-components-page',
  templateUrl: './components-page.component.html',
  styleUrls: ['./components-page.component.css']
})
export class ComponentsPageComponent implements OnInit, OnDestroy {

  // products: Product[] = [];
  subscription: Subscription | undefined = undefined;
  products$: Observable<Product[]> | undefined = undefined;
  customers: Customer[] = [];

  constructor(private router: Router, private service: ProductsService, private observableService: CustomersService) {
    this.subscription = this.observableService.customersObservable$?.subscribe( (customer) => {
      this.customers.push(customer);
    });
  }


  gotoDetails(id: number){
      this.router.navigate(['/products', id]);
  }

  ngOnDestroy(): void {
     this.subscription?.unsubscribe();
  }
  ngOnInit(): void {
    // this.products = this.service.getProducts();
   // this.subscription = this.service.getProductsAsObservable().subscribe(
   //   (products: Product[]) => this.products = products,
   // );

  // this.products$ =  this.service.getProductsAsObservable();
  this.products$ =  this.service.getProductsAsObservableFromApi();

  }

}
