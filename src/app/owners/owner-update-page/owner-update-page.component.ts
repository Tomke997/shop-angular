import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {OwnersService} from '../../shared/services/owners.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Owner} from '../../shared/models/Owner';

@Component({
  selector: 'app-owner-update-page',
  templateUrl: './owner-update-page.component.html',
  styleUrls: ['./owner-update-page.component.css']
})
export class OwnerUpdatePageComponent implements OnInit {
    owner: Owner;
    ownerId: number;
    ownerForm = new FormGroup({
    FirstName: new FormControl(''),
    LastName: new FormControl(''),
    Address: new FormControl(''),
    PhoneNumber: new FormControl(''),
    Pet: new FormControl('')
  });
  constructor(private route: ActivatedRoute,
              private ownerService: OwnersService,
              private router: Router) { }

  ngOnInit() {
     const id = +this.route.snapshot.paramMap.get('ID');
     this.ownerId = id;
     this.ownerService.getOwnerById(id).subscribe( selectedOwner => {
       this.owner = selectedOwner;
       this.ownerForm.patchValue({
         FirstName: this.owner.firstName,
         LastName: this.owner.lastName,
         Address: this.owner.address,
         PhoneNumber: this.owner.phoneNumber,
         Pet: this.owner.pet
       });
     });
  }
update() {
  const ownerUpdate = this.ownerForm.value;
  ownerUpdate.id = this.ownerId;
  this.ownerService.updateOwner(ownerUpdate, this.ownerId).subscribe(() => {});
  this.router.navigateByUrl('/owners');
}
}
