import { Component, OnInit } from '@angular/core';
import { AuthService } from './_services/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from './_model/User';
import { UserService } from './_services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  jwtHelper = new JwtHelperService();

  constructor(private authServ: AuthService,
              private userServ: UserService){}

  ngOnInit() {
    const token = localStorage.getItem('token');
    const user: User = JSON.parse(localStorage.getItem('user'));
    if (token) {
      this.authServ.decodedToken = this.jwtHelper.decodeToken(token);
    }

    if(user) {
      this.authServ.currentUser = user;
      this.userServ.changeMemberPhoto(user.photoUrl);
    }
  }

}
