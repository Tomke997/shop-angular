import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { OwnerListPageComponent } from './owners/owner-list-page/owner-list-page.component';
import { PetListPageComponent } from './pets/pet-list-page/pet-list-page.component';
import { OwnerDetailsPageComponent } from './owners/owner-details-page/owner-details-page.component';
import { PetDetailsPageComponent } from './pets/pet-details-page/pet-details-page.component';
import { PetAddPageComponent } from './pets/pet-add-page/pet-add-page.component';
import { OwnerAddPageComponent } from './owners/owner-add-page/owner-add-page.component';
import {ReactiveFormsModule} from '@angular/forms';
import { OwnerUpdatePageComponent } from './owners/owner-update-page/owner-update-page.component';
import { PetUpdatePageComponent } from './pets/pet-update-page/pet-update-page.component';
import {HttpClientModule} from '@angular/common/http';
import {BsDatepickerModule, BsDropdownModule, ButtonsModule, ModalModule, TabsModule} from 'ngx-bootstrap';
import { LoginComponent } from './login/login/login.component';
import {AuthenicationService} from './shared/services/authenication.service';
import {Guard} from './guards/guard';
import { RegisterComponent } from './login/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WelcomeComponent,
    OwnerListPageComponent,
    PetListPageComponent,
    OwnerDetailsPageComponent,
    PetDetailsPageComponent,
    PetAddPageComponent,
    OwnerAddPageComponent,
    OwnerUpdatePageComponent,
    PetUpdatePageComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ButtonsModule.forRoot(),
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
  ],
  providers: [
    Guard,
    AuthenicationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
