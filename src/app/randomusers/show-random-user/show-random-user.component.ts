import { Component } from '@angular/core';
import { RandomUsersService } from '../random-users.service';
import { RandomUsersResponse, Result } from '../models/random-user-response';

@Component({
  selector: 'app-show-random-user',
  templateUrl: './show-random-user.component.html',
  styleUrls: ['./show-random-user.component.css']
})
export class ShowRandomUserComponent {

    //user: RandomUsersResponse | undefined = undefined;
    betterUser: Result | undefined = undefined;
    randomUsers: Result[] | undefined = undefined;
    numero = 0;


    constructor(private service: RandomUsersService) {
      // this.service.getRandomUsersResponse().subscribe(
      //   response => this.user = response
      // );

      this.service.getRandomUserData().subscribe(
        u => this.betterUser = u
      );

      this.service.getRandomMultipleUserData().subscribe(
        u => this.randomUsers = u
      );

      this.numero = this.service.mySignal();

    }
}
