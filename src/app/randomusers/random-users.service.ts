import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable, map } from 'rxjs';
import { RandomUsersResponse, Result } from './models/random-user-response';

@Injectable({
  providedIn: 'root'
})
export class RandomUsersService {

  mySignal = signal(0);

  constructor(private http: HttpClient) {


  }



  getRandomUsersResponse(): Observable<RandomUsersResponse> {
    return this.http.get<RandomUsersResponse>('https://randomuser.me/api/');
  }


  getRandomUserData(): Observable<Result> {
       return this.http.get<RandomUsersResponse>('https://randomuser.me/api/')
       .pipe(
          map( (response: RandomUsersResponse) => {
            return response.results[0];
          })
        );
  }

  getRandomMultipleUserData(): Observable<Result[]> {

    setInterval( () => {
      this.mySignal = signal(Math.random() * 100);
    }, 1000);


    return this.http.get<RandomUsersResponse>('https://randomuser.me/api?results=10')
    .pipe(
       map( (response: RandomUsersResponse) => {
         return response.results.filter( r => r.gender === "male" );
       })
     );
}


}
