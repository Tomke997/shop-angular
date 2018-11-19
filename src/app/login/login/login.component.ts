import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthenicationService} from '../../shared/services/authenication.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    Username: new FormControl(''),
    Password: new FormControl(''),
  });

  constructor(private router: Router, private authenicationService: AuthenicationService) { }

  ngOnInit() {
    this.authenicationService.logout();
  }

  login() {
    /*this.loading = true;*/
    this.authenicationService.login(this.loginForm.value)
      .subscribe(
        success => {
          this.router.navigate(['/']);
        },
        error => {
/*          this.errormessage = error.message;
          this.loading = false;*/
        });
  }

}
