import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Users } from '../models/users';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private base = environment.base + 'users/';

  constructor(private http:HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders ({
      'Content-Type': 'application/json'
    })
  };

  getUser(): Observable<Users[]> {
    return this.http.get<Users[]>(this.base).pipe(catchError(this.errorHandler))
  }

  getUserId($id:number): Observable<Users> {
    return this.http.get<Users>(this.base + $id).pipe(catchError(this.errorHandler))
  }

  actualizarUser($id:number,user:Users): Observable<Users> {
    return this.http.put<Users>(this.base + $id, JSON.stringify(user), this.httpOptions).pipe(catchError(this.errorHandler))
  }

  eliminarUser($id:number): Observable<Users> {
    return this.http.delete<Users>(this.base + $id).pipe(catchError(this.errorHandler))
  }

  registrarUser(user:Users){
    return this.http.post<Users>(this.base, JSON.stringify(user), this.httpOptions).pipe(catchError(this.errorHandler))
  }

  errorHandler(error: { error: { message: string; }; status: any; message: any; }) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
