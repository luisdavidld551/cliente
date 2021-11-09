import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Users } from './../../user/models/users';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})

export class UserProfileComponent implements OnInit {
  UserProfile:any = [];

  constructor(public authService: AuthService) {
    this.authService.profileUser().subscribe((data:any) => {
      this.UserProfile = data;
    })
  }

  ngOnInit() { }

}