import { Component } from '@angular/core';
import { EventBusService } from '../event-bus.service';
import { Product } from 'src/app/products/models/product';
import { Events } from '../events';
import { NotificationsService } from 'src/app/notifications/notifications.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  footerMessage = "Footer message";
  constructor(private eventBus : EventBusService, private notificationService: NotificationsService) {

  eventBus.on(Events.ProductsAdded, (product: Product) => {
    this.footerMessage = product.name;
  })

  this.notificationService.notificatiosn$.subscribe(
    n => {
      this.footerMessage = n.code + ' ' + n.message;
    }
  );

}
}
