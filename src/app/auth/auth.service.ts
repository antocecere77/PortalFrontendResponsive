import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {JwtHelperService} from '@auth0/angular-jwt';
import { Subject } from 'rxjs';

@Injectable()
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  login(username: string, password: string) {
    return this.httpClient.post<any>(`http://localhost:9090/auth`,
      {username, password})
      .pipe(map(
        data => {
          console.log(data);
          sessionStorage.setItem('AuthToken', `Bearer ${data.token}`);
          return data;
        }
      ));
  }

  logout() {
    const userId = this.getUserId();
    sessionStorage.removeItem('AuthToken');
  }

  getToken() {
    return sessionStorage.getItem('AuthToken');
  }

  getUserId() {
    const helper = new JwtHelperService();
    let userId = '';
    let token: string = this.getToken();

    if (token !== null && token.length > 7) {
      token = token.substring(7);
    }

    const decodedToken = helper.decodeToken(token);
    console.log(decodedToken);
    userId = decodedToken.sub;
    return userId;
  }
}
