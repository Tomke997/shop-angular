import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {OwnersService} from '../../shared/services/owners.service';
import {PetsService} from '../../shared/services/pets.service';
import {Pet} from '../../shared/models/Pet';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-pet-update-page',
  templateUrl: './pet-update-page.component.html',
  styleUrls: ['./pet-update-page.component.css']
})
export class PetUpdatePageComponent implements OnInit {
pet: Pet;
petId: number;

  petForm = new FormGroup({
    Name: new FormControl(''),
    Type: new FormControl(''),
    Birthdate: new FormControl(''),
    SoldDate: new FormControl(''),
    Color: new FormControl(''),
    PreviousOwner: new FormControl(''),
    Price: new FormControl('')
  });
  constructor(private route: ActivatedRoute,
              private petService: PetsService,
              private router: Router) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('ID');
    this.petId = id;
    this.petService.getPetById(this.petId).subscribe( selectedPet => {
      this.pet = selectedPet;
      this.petForm.patchValue({
        Name: this.pet.name,
        Type: this.pet.type,
        Birthdate: this.pet.birthdate,
        SoldDate: this.pet.soldDate,
        Color: this.pet.color,
        PreviousOwner: this.pet.previousOwner,
        Price: this.pet.price,
      });
    });
  }

  update() {
    const petUpdate = this.petForm.value;
    petUpdate.id = this.petId;
    this.petService.updatePet(petUpdate).subscribe(() => {
      this.router.navigateByUrl('/pets');
    });
  }
}
