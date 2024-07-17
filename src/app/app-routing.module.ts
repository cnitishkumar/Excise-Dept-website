import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { NewlicenseComponent } from './newlicense/newlicense.component';
const routes: Routes = [
  {path : '', title : 'home' ,component : HomeComponent},
  {path : 'login', title : 'login' ,component :LoginComponent},
  {path : 'profilePage', title : 'ProfilePage' ,component :ProfileComponent},
  {path : 'signup', title : 'Signup' ,component :SignupComponent},
  {path : 'newLicense', title : 'newLicense' ,component :NewlicenseComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
