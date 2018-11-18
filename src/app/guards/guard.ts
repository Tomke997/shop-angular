import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import {AuthenicationService} from '../shared/services/authenication.service';

@Injectable()
export class Guard implements CanActivate {

  constructor(private router: Router, private authenicationService: AuthenicationService) { }

  canActivate() {
    if (this.authenicationService.getToken()) {
      // logged in so return true
      return true;
    }

    // not logged in so redirect to login page
    this.router.navigate(['/login']);
    return false;
  }
}
