import { Component, inject } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

    private loginService = inject(LoginService);

    login(){
      this.loginService.login().subscribe();
   }

    constructor() {
    
    }



}
