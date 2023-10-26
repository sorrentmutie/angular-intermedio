import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, map, tap, throwError } from 'rxjs';
import { MyNotification } from 'src/app/notifications/my-notification';
import { NotificationsService } from 'src/app/notifications/notifications.service';

@Injectable()
export class FirstInterceptor implements HttpInterceptor {

  token="XXXXXXXYYYYY";

  constructor(private notificationService: NotificationsService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    this.notificationService.showLoader();

    console.log('FirstInterceptor');
    console.log(request);

    //let newRequest = request.clone({  });
    let newRequest = request.clone({ setHeaders: { Authorization: `Bearer ${this.token}` } });

    return next.handle(newRequest)
      .pipe(
        map( (event: HttpEvent<unknown>) => {
          if(event instanceof HttpResponse){

            const notification: MyNotification = {
              code : event.status,
              message : 'Message = ' + event.statusText,
            }

            this.notificationService.sendNotification(notification);
            this.notificationService.hideLoader();

            console.log(event);
            return event;
          }
          return event;
        }),
        catchError( (error: HttpErrorResponse) => {
          console.log(error);

          const notification: MyNotification = {
            code : error.status,
            message : 'Message = ' + error.statusText,
          }

          this.notificationService.sendNotification(notification);
          this.notificationService.hideLoader();


          return throwError(() => new Error('Errore nella richiesta ' + error.status));
        })
      )
  }
}
