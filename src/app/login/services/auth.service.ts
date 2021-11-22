import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Users } from './../../user/models/users';

// User interface
/*
export class User {
  name: String='';
  email: String='';
  password: String='';
  password_confirmation: String='';
}*/

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private userAuth = environment.base + "auth/";
  private userRegi = environment.base + "users/";

  constructor(private http: HttpClient) { }

  // User registration
  register(user: Users): Observable<Users> {
    return this.http.post<Users>(this.userRegi +'store', user);
  }

  // Login
  signin(user: Users): Observable<Users> {
    return this.http.post<Users>(this.userAuth +'login', user);
  }

  // Access user profile
  profileUser(): Observable<Users> {
    return this.http.get<Users>(this.userAuth +'user-profile');
  }

}