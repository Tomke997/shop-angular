import { Injectable } from '@angular/core';
import {Owner} from '../models/Owner';
import {Pet} from '../models/Pet';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OwnersService {
  id = 1;
  apiUrl = 'https://localhost:5001/api/owners';
  constructor(private http: HttpClient) {
  }
  getOwners(): Observable<Owner[]> {
    return this.http.get<Owner[] >(this.apiUrl);
  }
  getOwnerById(id: number): Observable<Owner> {
    return this.http.get<Owner>(this.apiUrl + '/' + id);
  }
  addNewOwner(newOwner: Owner): Observable<any> {
    return this.http.post<Owner>(this.apiUrl, newOwner);
  }
  updateOwner(ownerUpdate: Owner, id: number): Observable<Owner> {
    return this.http.put<Owner>(this.apiUrl + '/' + id, ownerUpdate);
  }
  deleteOwner(id: number): Observable<any> {
    return this.http.delete<Owner>(this.apiUrl + '/' + id);
  }
}
