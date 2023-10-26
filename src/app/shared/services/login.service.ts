import { Injectable } from '@angular/core';
import { Observable, delay, of, tap } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedIn = false;
  currentUser: User | undefined = undefined;
  constructor() { }

  login(): Observable<boolean>{
      return of(true)
         .pipe(
            delay(1000),
            tap(
              x => {
                this.isLoggedIn = true;
                this.currentUser = {
                  id: 1,
                  name: 'John',
                  photo: 'https://cdn.freebiesupply.com/logos/large/2x/angular-icon-1-logo-png-transparent.png'
                };
              } )
         );
  }

  logout(): void{
     this.isLoggedIn = false;
     this.currentUser = undefined;
  }

}
