import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, filter, map, of } from 'rxjs';
import { NotificationsService } from './notifications/notifications.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  visibility = false;
  title = 'my-app';
  subscription: Subscription | undefined = undefined;
  observable: Observable<number> | undefined = undefined;
  myObserver = {
    next: (x: number) => console.log('Observer got a next value: ' + x),
    error: (err: Error) => console.error('Observer got an error: ' + err),
    complete: () => console.log('Observer got a complete notification'),
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
  ngOnInit(): void {
   this.observable = of(1,2,3,4,5,6,7,8,9,10);
   this.subscription= this.observable
   .pipe(
      map((x: number) => x * 3),
      filter( (x:number) => x % 2 === 0),
      map((x: number) => x + 1)
   )
   .subscribe(this.myObserver);
  }

  constructor( private service: NotificationsService) {
      service.loader$.subscribe( visibility => {
        this.visibility = visibility;
      });
  }

}
