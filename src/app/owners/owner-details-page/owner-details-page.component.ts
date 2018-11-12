import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {OwnersService} from '../../shared/services/owners.service';
import {Owner} from '../../shared/models/Owner';

@Component({
  selector: 'app-owner-details-page',
  templateUrl: './owner-details-page.component.html',
  styleUrls: ['./owner-details-page.component.css']
})
export class OwnerDetailsPageComponent implements OnInit {
owner: Owner;
  constructor(private route: ActivatedRoute,
              private ownerService: OwnersService) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('ID');
    this.ownerService.getOwnerById(id).subscribe( updatedOwner => {
      this.owner = updatedOwner;
    });
  }

}
