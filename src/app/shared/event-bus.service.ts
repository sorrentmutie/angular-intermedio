import { Injectable } from '@angular/core';
import { Subject, Subscription, filter, map } from 'rxjs';
import { Events } from './events';
import { EmitEvent } from './emit-event';

@Injectable({
  providedIn: 'root'
})
export class EventBusService {

  private subject$ = new Subject<any>();
  constructor() { }

  emit(event: EmitEvent){
    this.subject$.next(event);
  }

  on(event: Events, action: any): Subscription {
      return this.subject$
      .pipe(
        filter((e: EmitEvent) => e.name === event),
        map((e: EmitEvent) => e.value))
      .subscribe(action);
  }

}
