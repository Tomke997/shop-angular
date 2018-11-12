import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PetsService} from '../../shared/services/pets.service';
import {Pet} from '../../shared/models/Pet';

@Component({
  selector: 'app-pet-details-page',
  templateUrl: './pet-details-page.component.html',
  styleUrls: ['./pet-details-page.component.css']
})
export class PetDetailsPageComponent implements OnInit {
pet: Pet;

  constructor(private route: ActivatedRoute,
              private petService: PetsService) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('ID');
    this.petService.getPetById(id).subscribe(selectedPet => {
      this.pet = selectedPet;
    });
  }

}
