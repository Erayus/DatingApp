import { Component, OnInit } from '@angular/core';
import { User } from './../../_model/user';
import { UserService } from 'src/app/_services/user.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {
  user: User;

  constructor(private userServ: UserService,
              private alertiFy: AlertifyService,
              private route: ActivatedRoute) { }

  ngOnInit() {
  }

  loadUser() {
    this.userServ.getUser(+this.route.snapshot.params['id']).subscribe((user: User) => {
      this.user = user;
    }, error => {
      this.alertiFy.error(error)
    });
  }

}