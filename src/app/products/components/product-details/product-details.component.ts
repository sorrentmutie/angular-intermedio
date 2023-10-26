import { Component, OnDestroy, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnDestroy {
    product: Product | undefined = undefined;
    subscription: Subscription | undefined = undefined;
    private service = inject(ProductsService);

    constructor(private route: ActivatedRoute) {
      const id = this.route.snapshot.paramMap.get('id');
      if(id){
        this.subscription =  this.service.getProductById(+id).subscribe(
          product => this.product = product
        );
      }
    }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

}
