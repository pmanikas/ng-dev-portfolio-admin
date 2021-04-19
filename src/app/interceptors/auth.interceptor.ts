import { Injectable, Inject, Optional } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './../services/auth.service';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthService,
  ){}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): any {
    const token: string = this.authService.getToken();

    // request = request.clone({
    //   url: request.url,
    //   setHeaders: {
    //     Authorization: token || '',
    //   },
    // });

    const setAuthorizationToken = request.clone({
      headers: request.headers.set('Authorization', `${token}`)
    });
    return next.handle(setAuthorizationToken);

  }
}
