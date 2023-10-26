import { Component } from '@angular/core';
import { EventBusService } from '../event-bus.service';
import { EmitEvent } from '../emit-event';
import { Events } from '../events';

@Component({
  selector: 'app-customers-data',
  templateUrl: './customers-data.component.html',
  styleUrls: ['./customers-data.component.css']
})
export class CustomersDataComponent {

  constructor(private eventBus: EventBusService){

  }

  emit(){
    this.eventBus.emit(new EmitEvent
      (Events.CustomerAdded, {name: 'Mario', id: 42}));
    this.eventBus.emit(new EmitEvent(Events.ProductsAdded, {id: 53, name: 'Product 53', price: 200}))
  }

}
