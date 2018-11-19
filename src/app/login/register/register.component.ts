import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthenicationService} from '../../shared/services/authenication.service';
import {UserService} from '../../shared/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    Username: new FormControl(''),
    Password: new FormControl(''),
  });
  constructor(private router: Router, private authenicationService: AuthenicationService, private userService: UserService) { }

  ngOnInit() {
  }
  register() {
    this.userService.register(this.registerForm.value).subscribe(() =>{
      this.router.navigateByUrl('/login');
    });
  }
}
