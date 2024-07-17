import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { FooterComponent } from './footer/footer.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SignupComponent } from './signup/signup.component';
import { HometopcomponentComponent } from './hometopcomponent/hometopcomponent.component';
import { HomemidcomponentComponent } from './homemidcomponent/homemidcomponent.component';
import { HomebottomcomponentComponent } from './homebottomcomponent/homebottomcomponent.component';
import { NewlicenseComponent } from './newlicense/newlicense.component';
import { FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';



import { CommonModule, JsonPipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent,
    FooterComponent,
    SignupComponent,
    HometopcomponentComponent,
    HomemidcomponentComponent,
    HomebottomcomponentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    JsonPipe,  
    NewlicenseComponent,
    
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
