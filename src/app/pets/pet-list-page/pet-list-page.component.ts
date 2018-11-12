import { Component, OnInit } from '@angular/core';
import {PetsService} from '../../shared/services/pets.service';
import {Pet} from '../../shared/models/Pet';

@Component({
  selector: 'app-pet-list-page',
  templateUrl: './pet-list-page.component.html',
  styleUrls: ['./pet-list-page.component.css']
})
export class PetListPageComponent implements OnInit {

  pets: Pet[];
  constructor(private petService: PetsService) { }

  ngOnInit() {
    this.refresh()
  }
  refresh() {
    this.petService.getPets().subscribe( petList => {
      this.pets = petList;
    });
  }
  delete(id: number) {
  this.petService.deletePet(id).subscribe(() => {
    this.refresh();
  });
  }
}
