import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormGroup } from "@angular/forms";
import { TokenService } from '../services/token.service';
import { AuthStateService } from '../services/auth-state.service';
import { MessageService } from '../../interceptors/message.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SigninComponent implements OnInit {
  loginForm: FormGroup;
  errors:any = [];

  constructor(public router: Router,
              public fb: FormBuilder,
              public authService: AuthService,
              private token: TokenService,
              private authState: AuthStateService,
              private messageService: MessageService) {
    this.loginForm = this.fb.group({
      email: [''],
      password: ['']
    })
  }

  ngOnInit() { }

  onSubmit() {
      this.authService.signin(this.loginForm.value).subscribe(
        result => {
          this.responseHandler(result);
          this.messageService.showInfo('Bienvenido', 'top right');
          //console.log(result);
        },
        error => {
          this.errors = error.error;
          //console.log(this.errors);
        },() => {
          this.authState.setAuthState(true);
          this.loginForm.reset()
          this.router.navigate(['profile']);
        }
      );
  }

  // Handle response
  responseHandler(data:any){
    this.token.handleData(data.access_token);
    this.token.handleDataRol(data.role_id);
  }

}
