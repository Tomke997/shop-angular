import { Component, OnInit } from '@angular/core';
import {OwnersService} from '../../shared/services/owners.service';
import {Owner} from '../../shared/models/Owner';

@Component({
  selector: 'app-owner-list-page',
  templateUrl: './owner-list-page.component.html',
  styleUrls: ['./owner-list-page.component.css']
})
export class OwnerListPageComponent implements OnInit {

  owners: Owner[];
  constructor(private ownerService: OwnersService) { }

  ngOnInit() {
    this.refresh();
  }
  refresh() {
    this.ownerService.getOwners().subscribe(newList => {
      this.owners = newList;
    });
  }
  delete(id: number) {
    this.ownerService.deleteOwner(id).subscribe(() => {
      this.refresh();
    });
  }
}
