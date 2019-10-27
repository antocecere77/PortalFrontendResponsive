import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpParams } from '@angular/common/http';
import { AuthService } from '../../auth/auth.service';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

    constructor(private authService: AuthService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const token = this.authService.getToken();

        if (!token) {
            return next.handle(req);
        }

        const modifiedReq = req.clone({
            setHeaders :
            {
              Authorization: token
            }
        });
        return next.handle(modifiedReq);
    }

}
