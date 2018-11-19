import {Component, OnInit, TemplateRef} from '@angular/core';
import {OwnersService} from '../../shared/services/owners.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {Pet} from '../../shared/models/Pet';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {PetsService} from '../../shared/services/pets.service';
import {Owner} from '../../shared/models/Owner';

@Component({
  selector: 'app-owner-add-page',
  templateUrl: './owner-add-page.component.html',
  styleUrls: ['./owner-add-page.component.css']
})
export class OwnerAddPageComponent implements OnInit {
  modalRef: BsModalRef;
ownerForm = new FormGroup({
  FirstName: new FormControl(''),
  LastName: new FormControl(''),
  Address: new FormControl(''),
  PhoneNumber: new FormControl(''),
});
  maxDate = new Date();
  petForm = new FormGroup({
    Name: new FormControl(''),
    Type: new FormControl(''),
    Birthdate: new FormControl(''),
    SoldDate: new FormControl(''),
    Color: new FormControl(''),
    Price: new FormControl('')
  });
  pets: Pet[];
  selectedPet: Pet;
  newOwner: Owner;
  constructor(private ownerService: OwnersService,
              private router: Router, private modalService: BsModalService, private petService: PetsService) { }

  ngOnInit() {
    this.refresh();
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
addNewOwner() {
/*const newOwner = this.ownerForm.value;*/
this.newOwner = this.ownerForm.value;
this.newOwner.pet = this.selectedPet;
this.ownerService.addNewOwner(this.newOwner).subscribe(() => {
  this.router.navigateByUrl('/owners');
});
  }
  createPet() {
    const newPet = this.petForm.value;
    this.petService.addNewPet(newPet).subscribe(() => {
      this.refresh();
    });
  }
  refresh() {
    this.petService.getPets().subscribe( petList => {
      this.pets = petList;
    });
  }
  setPet(selectedPet: Pet) {
    this.selectedPet = selectedPet;
  }
}
