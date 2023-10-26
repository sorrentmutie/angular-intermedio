import { Injectable } from '@angular/core';
import { MyNotification } from './my-notification';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  private subject = new Subject<MyNotification>();
  private subjectLoader = new Subject<boolean>();
  notificatiosn$ = this.subject.asObservable();
  loader$ = this.subjectLoader.asObservable();

  constructor() { }

  sendNotification(notification: MyNotification) {
    this.subject.next(notification);
  }

  showLoader() {
    this.subjectLoader.next(true);
  }

  hideLoader() {
    this.subjectLoader.next(false);
  }

}
