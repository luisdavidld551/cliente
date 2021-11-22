import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})

export class TokenService {

  private issuer = {
    login: environment.base + 'auth/login',
    register: environment.base + 'users/store'
  }

  constructor() { }

  handleData(token: string) {
    localStorage.setItem('auth_token', token);
  }
  handleDataRol(token: any) {
    localStorage.setItem('role_id', token);
  }

  getToken() {
    return localStorage.getItem('auth_token');
  }

  getRol() {
    return localStorage.getItem('role_id');
  }

  // Verify the token
  isValidToken() {
    const token = this.getToken();

    if (token) {
      const payload = this.payload(token);
      if (payload) {
        return Object.values(this.issuer).indexOf(payload.iss) > -1 ? true : false;
      }
    }
    return false;
  }

  payload(token: string) {
    const jwtPayload = token.split('.')[1];
    return JSON.parse(atob(jwtPayload));
  }

  // User state based on valid token
  isLoggedIn() {
    return this.isValidToken();
  }

  // Remove token
  removeToken() {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('role_id');
  }

}