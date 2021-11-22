import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Taks } from '../models/taks';
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private base2 = environment.base + 'tasksAsignar/';

  private base = environment.base + 'tasks/';

  private httpOptions = {
    headers: new HttpHeaders ({
      'Content-Type': 'application/json'
    })
  };
  
  constructor(private http:HttpClient) { }

  getTask(): Observable<Taks[]> {
    return this.http.get<Taks[]>(this.base).pipe(catchError(this.errorHandler))
  }

  getTaskId($id:number): Observable<Taks> {
    return this.http.get<Taks>(this.base + $id).pipe(catchError(this.errorHandler))
  }

  getTaskUserId(): Observable<Taks> {
    return this.http.get<Taks>(this.base2).pipe(catchError(this.errorHandler))
  }

  actualizar($id:number,task:Task): Observable<Taks> {
    return this.http.put<Taks>(this.base2 + $id, JSON.stringify(task), this.httpOptions).pipe(catchError(this.errorHandler))
  }

  eliminar($id:number): Observable<Taks> {
    return this.http.delete<Taks>(this.base + $id).pipe(catchError(this.errorHandler))
  }

  registrar(task:Task){
    return this.http.post<Taks>(this.base, JSON.stringify(task), this.httpOptions).pipe(catchError(this.errorHandler))
  }

  errorHandler(error: { error: { message: string; }; status: any; message: any; }) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
