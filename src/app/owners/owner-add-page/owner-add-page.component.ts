import {Component, OnInit, TemplateRef} from '@angular/core';
import {OwnersService} from '../../shared/services/owners.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {Pet} from '../../shared/models/Pet';
import {BsModalService} from 'ngx-bootstrap';

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
  Pet: new FormControl('')
});
  constructor(private ownerService: OwnersService,
              private router: Router, private modalService: BsModalService) { }

  ngOnInit() {
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
addNewOwner() {
const newOwner = this.ownerForm.value;
this.ownerService.addNewOwner(newOwner).subscribe(() => {
  this.router.navigateByUrl('/owners');
});

}
}
