import { Injectable } from '@angular/core';
import { Customer } from './customer';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  private subject$ = new Subject<Customer>();
  private interval: any;

  customersObservable$ : Observable<Customer> | undefined = undefined;

  constructor() {
     this.customersObservable$ = this.subject$.asObservable();
  }

  start(){
   this.interval =  setInterval( () => {
      const customer: Customer = {
        id: Math.random(),
        name: 'John' + Math.random()
      };
      this.subject$.next(customer);
   }  ,3000);
  }

  stop(){
    clearInterval(this.interval);
  }


}
