import { Injectable } from '@angular/core';
import {Owner} from '../models/Owner';
import {Pet} from '../models/Pet';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
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
export class OwnersService {
  id = 1;
  apiUrl = 'https://localhost:5001/api/owners';
  constructor(private http: HttpClient, private authenicationService: AuthenicationService) {
  }
  getOwners(): Observable<Owner[]> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenicationService.getToken());
    return this.http.get<Owner[] >(this.apiUrl, httpOptions);
  }
  getOwnerById(id: number): Observable<Owner> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenicationService.getToken());
    return this.http.get<Owner>(this.apiUrl + '/' + id, httpOptions);
  }
  addNewOwner(newOwner: Owner): Observable<any> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenicationService.getToken());
    return this.http.post<Owner>(this.apiUrl, newOwner, httpOptions);
  }
  updateOwner(ownerUpdate: Owner, id: number): Observable<Owner> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenicationService.getToken());
    return this.http.put<Owner>(this.apiUrl + '/' + id, ownerUpdate, httpOptions);
  }
  deleteOwner(id: number): Observable<any> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenicationService.getToken());
    return this.http.delete<Owner>(this.apiUrl + '/' + id, httpOptions);
  }
}
