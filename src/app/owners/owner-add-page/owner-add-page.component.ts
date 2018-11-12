import { Component, OnInit } from '@angular/core';
import {OwnersService} from '../../shared/services/owners.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {Pet} from '../../shared/models/Pet';

@Component({
  selector: 'app-owner-add-page',
  templateUrl: './owner-add-page.component.html',
  styleUrls: ['./owner-add-page.component.css']
})
export class OwnerAddPageComponent implements OnInit {
ownerForm = new FormGroup({
  FirstName: new FormControl(''),
  LastName: new FormControl(''),
  Address: new FormControl(''),
  PhoneNumber: new FormControl(''),
  Pet: new FormControl('')
});
  constructor(private ownerService: OwnersService,
              private router: Router) { }

  ngOnInit() {
  }
addNewOwner() {
const newOwner = this.ownerForm.value;
this.ownerService.addNewOwner(newOwner).subscribe(() => {
  this.router.navigateByUrl('/owners');
});

}
}
