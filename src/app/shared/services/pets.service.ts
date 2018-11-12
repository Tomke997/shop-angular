import { Injectable } from '@angular/core';
import {Pet} from '../models/Pet';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetsService {
petsCollection: Pet[];
  apiUrl = 'https://localhost:5001/api/pets';

  constructor(private http: HttpClient) {}
  getPetById(id: number): Observable<Pet> {
    return this.http.get<Pet>(this.apiUrl + '/' + id);
  }
  getPets(): Observable<Pet[]> {
    return this.http.get<Pet[]>(this.apiUrl);
  }
  addNewPet(newPet: Pet): Observable<any> {
    return this.http.post<Pet>(this.apiUrl, newPet);
  }
  updatePet(petUpdate: Pet): Observable<Pet> {
    return this.http.put<Pet>(this.apiUrl + '/' + petUpdate.id, petUpdate);
  }
  deletePet(id: number): Observable<any> {
    return this.http.delete<Pet>(this.apiUrl + '/' + id);
  }
}
