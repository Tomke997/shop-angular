import { Injectable } from '@angular/core';
import {Pet} from '../models/Pet';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { AuthenicationService } from './authenication.service';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};
@Injectable({
  providedIn: 'root'
})
export class PetsService {
  apiUrl = 'https://localhost:5001/api/pets';
  petsCollection: Pet[];
  constructor(private http: HttpClient, private authenicationService: AuthenicationService) {}
  getPetById(id: number): Observable<Pet> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenicationService.getToken());
    return this.http.get<Pet>(this.apiUrl + '/' + id, httpOptions);
  }
  getPets(): Observable<Pet[]> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenicationService.getToken());
    return this.http.get<Pet[]>(this.apiUrl, httpOptions);
  }
  addNewPet(newPet: Pet): Observable<any> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenicationService.getToken());
    return this.http.post<Pet>(this.apiUrl, newPet, httpOptions);
  }
  updatePet(petUpdate: Pet): Observable<Pet> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenicationService.getToken());
    return this.http.put<Pet>(this.apiUrl + '/' + petUpdate.id, petUpdate, httpOptions);
  }
  deletePet(id: number): Observable<any> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenicationService.getToken());
    return this.http.delete<Pet>(this.apiUrl + '/' + id, httpOptions);
  }
}
