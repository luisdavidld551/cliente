import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse, HttpResponse } from "@angular/common/http";
import { TokenService } from "../login/services/token.service";
import { Observable, throwError } from 'rxjs';
import { MessageService } from './message.service';
import { catchError } from 'rxjs/operators';


@Injectable()

export class AuthInterceptor implements HttpInterceptor {
    constructor(private tokenService: TokenService,
				private messageService: MessageService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        //console.log(next);
        const accessToken = this.tokenService.getToken();
        req = req.clone({
            setHeaders: {
                Authorization: "Bearer " + accessToken
            }
        });
        return next.handle(req).pipe( catchError(error => this.herrorHandler(error)));
    }

    private herrorHandler(error: HttpErrorResponse): Observable<any> {		
		if (error instanceof HttpErrorResponse) {
			if (error.error instanceof ErrorEvent) {
				this.messageService.showError('ERROR DE CLIENTE', 'top right');
			} else {
				if (error.status === 401) {
					this.messageService.showError('Ustede no cuenta con permisos para ingresar', 'top right');
				} else {
					this.messageService.showError('ERROR DE SERVIDOR', 'top right');
				}
			}
		} else {
			this.messageService.showError('OTRO TIPO DE ERROR', 'top right');
		}
		return throwError(error);
	}
}