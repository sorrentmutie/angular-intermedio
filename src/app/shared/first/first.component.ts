import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
    constructor(private router: Router) { }

    navigateToProducts() {
      this.router.navigate(['/products']);
    }

}
