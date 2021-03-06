import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {OwnerListPageComponent} from './owners/owner-list-page/owner-list-page.component';
import {PetListPageComponent} from './pets/pet-list-page/pet-list-page.component';
import {CommonModule} from '@angular/common';
import {OwnerDetailsPageComponent} from './owners/owner-details-page/owner-details-page.component';
import {PetDetailsPageComponent} from './pets/pet-details-page/pet-details-page.component';
import {OwnerAddPageComponent} from './owners/owner-add-page/owner-add-page.component';
import {PetAddPageComponent} from './pets/pet-add-page/pet-add-page.component';
import {PetUpdatePageComponent} from './pets/pet-update-page/pet-update-page.component';
import {OwnerUpdatePageComponent} from './owners/owner-update-page/owner-update-page.component';
import {LoginComponent} from './login/login/login.component';
import {Guard} from './guards/guard';
import {RegisterComponent} from './login/register/register.component';

const routes: Routes = [
  { path: 'pets/:ID', component: PetDetailsPageComponent },
  { path: 'owners/:ID', component: OwnerDetailsPageComponent },
  { path: 'owners-update/:ID', component: OwnerUpdatePageComponent },
  { path: 'pets-update/:ID', component: PetUpdatePageComponent },
  { path: '', component: WelcomeComponent, canActivate: [Guard]  },
  { path: 'owners-add', component: OwnerAddPageComponent },
  { path: 'pets-add', component: PetAddPageComponent },
  { path: 'owners', component: OwnerListPageComponent },
  { path: 'pets', component: PetListPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
