import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Login} from '../models/Login';

@Injectable({
  providedIn: 'root'
})
export class AuthenicationService {

  constructor(private http: HttpClient) { }

  login(login: Login): Observable<boolean> {
    return this.http.post<any>('https://petshopassignment.azurewebsites.net/api/tokens', login)
      .pipe(map(response => {
        const token = response && response.token;
        // login successful if there's a jwt token in the response
        if (token) {
          // store username and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify({username: login.username, token: token}));
          // return true to indicate successful login
          return true;
        } else {
          // return false to indicate failed login
          return false;
        }
      }));
  }
    getToken(): string {
      const currentUser = JSON.parse(localStorage.getItem('currentUser'));
      return currentUser && currentUser.token;
    }

    getUsername(): string {
      const currentUser = JSON.parse(localStorage.getItem('currentUser'));
      return currentUser && currentUser.username;
    }

    logout(): void {
      // remove user from local storage to log user out
      localStorage.removeItem('currentUser');
  }
}
