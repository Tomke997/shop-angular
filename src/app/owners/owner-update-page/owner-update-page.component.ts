import {Component, OnInit, TemplateRef} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {OwnersService} from '../../shared/services/owners.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Owner} from '../../shared/models/Owner';
import {PetsService} from '../../shared/services/pets.service';
import {Pet} from '../../shared/models/Pet';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';

@Component({
  selector: 'app-owner-update-page',
  templateUrl: './owner-update-page.component.html',
  styleUrls: ['./owner-update-page.component.css']
})
export class OwnerUpdatePageComponent implements OnInit {
  modalRef: BsModalRef;
    owner: Owner;
    ownerId: number;
    ownerForm = new FormGroup({
    FirstName: new FormControl(''),
    LastName: new FormControl(''),
    Address: new FormControl(''),
    PhoneNumber: new FormControl(''),
    Pet: new FormControl('')
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
  constructor(private route: ActivatedRoute,
              private ownerService: OwnersService,
              private router: Router, private petService: PetsService, private modalService: BsModalService) { }

  ngOnInit() {
     const id = +this.route.snapshot.paramMap.get('ID');
     this.ownerId = id;
     this.ownerService.getOwnerById(id).subscribe( selectedOwner => {
       this.owner = selectedOwner;
       this.selectedPet = this.owner.pet;
       this.ownerForm.patchValue({
         FirstName: this.owner.firstName,
         LastName: this.owner.lastName,
         Address: this.owner.address,
         PhoneNumber: this.owner.phoneNumber,
       });
     });
     this.refresh();
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
update() {
  const ownerUpdate = this.ownerForm.value;
  ownerUpdate.id = this.ownerId;
  ownerUpdate.pet = this.selectedPet;
  this.ownerService.updateOwner(ownerUpdate, this.ownerId).subscribe(() => {
    this.router.navigateByUrl('/owners');
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
  createPet() {
    const newPet = this.petForm.value;
    this.petService.addNewPet(newPet).subscribe(() => {
      this.refresh();
    });
  }
}
