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

  public isSignedIn: boolean = false;
  public isSignedIn2: any = [];
  public routerLinkVariable: string = 'disabled';
  public isMenuCollapsed = true;

  constructor(private auth: AuthStateService,
              private router: Router,
              private token:TokenService) {
              }

  ngOnInit() {
    this.auth.userAuthState.subscribe(val => {
        if(val === false){
          this.isSignedIn = val;
          this.signOutData();
        }else if(val){
          this.isSignedIn = val;
          //console.log(this.isSignedIn);
          this.routerLinkVariable = 'profile';
          this.isSignedIn2 = this.token.getRol();
          //console.log('erwerwerwe',this.isSignedIn2);
        }
    });
  }
  
  // Signout
  signOut() {
    this.auth.setAuthState(false);
    this.signOutData();
  }
  signOutData() {
    this.token.removeToken();
    this.routerLinkVariable = '';
    this.isSignedIn2 = [];
    this.router.navigate(['login']);
  }
}