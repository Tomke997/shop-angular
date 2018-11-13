import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Owner} from '../../shared/models/Owner';
import {PetsService} from '../../shared/services/pets.service';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-pet-add-page',
  templateUrl: './pet-add-page.component.html',
  styleUrls: ['./pet-add-page.component.css']
})
export class PetAddPageComponent implements OnInit {
  maxDate = new Date();
  petForm = new FormGroup({
    Name: new FormControl(''),
    Type: new FormControl(''),
    Birthdate: new FormControl(''),
    SoldDate: new FormControl(''),
    Color: new FormControl(''),
    PreviousOwner: new FormControl(''),
    Price: new FormControl('')
  });
  constructor(private petService: PetsService,
              private  router: Router) { }

  ngOnInit() {
  }
  createPet() {
    const newPet = this.petForm.value;
    this.petService.addNewPet(newPet).subscribe(() => {
      this.router.navigateByUrl('/pets');
    });
  }
}
