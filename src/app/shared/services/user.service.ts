import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Pet} from '../models/Pet';
import {Observable} from 'rxjs';
import {Login} from '../models/Login';
import {AuthenicationService} from './authenication.service';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};
@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'https://petshopassignment.azurewebsites.net/api/users';
  constructor(private http: HttpClient, private authenicationService: AuthenicationService) { }
  register(registerDetails: Login): Observable<any> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenicationService.getToken());
    return this.http.post<Pet>(this.apiUrl, registerDetails, httpOptions);
  }
}
