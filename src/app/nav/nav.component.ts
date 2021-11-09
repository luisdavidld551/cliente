import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../login/services/token.service';
import { AuthStateService } from '../login/services/auth-state.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  isSignedIn: boolean = false;
  public isMenuCollapsed = true;

  constructor( private auth: AuthStateService, public router: Router, public token: TokenService) { }

  ngOnInit() {
    this.auth.userAuthState.subscribe(val => {
        this.isSignedIn = val;
    });
  }

  // Signout
  signOut() {
    this.auth.setAuthState(false);
    this.token.removeToken();
    this.router.navigate(['login']);
  }
}