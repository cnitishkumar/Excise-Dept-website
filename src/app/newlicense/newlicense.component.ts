import { CommonModule, NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-newlicense',
  standalone: true,
  imports: [RouterLink, FormsModule, ReactiveFormsModule, NgClass, NgStyle, CommonModule , ],
  templateUrl: './newlicense.component.html',
  styleUrl: './newlicense.component.css'
})
export class NewlicenseComponent {





  shopNameFocus: any = false
  shopDistFocus: any = false
  selectShopFocus: any = false
  shopAddressFocus: any = false
  personNameFocus: any = false
  fatherNameFocus: any = false
  dobFocus: any = false
  qualificationFocus: any = false
  occupationFocus: any = false
  incomeFocus: any = false
  experienceFocus: any = false
  emailFocus: any = false
  contactFocus: any = false
  cityFocus: any = false
  distFocus: any = false
  postelCodeFocus: any = false
  addressFocus: any = false
  formValue: any;
  isFormSubmitted: any = false


  shopNamePlaceHolder: any = 'Shop Name'


  onFocusShopName() {
    this.shopNameFocus = true
    this.shopNamePlaceHolder = ''
  }

  onBlurShopName() {
    this.shopNameFocus = false
    this.shopNamePlaceHolder = 'Shop Name'
  }

  onShopDistFocus() {
    this.shopDistFocus = true
  }

  onShopDistBlur() {
    this.shopDistFocus = false

  }

  onFocusChangeShop() {
    this.selectShopFocus = true
  }

  onBlurChangeShop() {
    this.selectShopFocus = false
  }
  onFocusShopAddress() {
    this.shopAddressFocus = true;
  }
  onBlurShopAddress() {
    this.shopAddressFocus = false;
  }


  onOptionChangeShopType(value: any) {
    console.log(value)
  }

  onFocusPersonName() {
    this.personNameFocus = true
  }

  onBlurPersonName() {
    this.personNameFocus = false
  }

  onFocusFatherName() {
    this.fatherNameFocus = true

  }
  onBlurFatherName() {
    this.fatherNameFocus = false
  }

  onFocusDob() {
    this.dobFocus = true

  }
  onBlurDob() {
    this.dobFocus = false

  }

  onFocusQualification() {
    this.qualificationFocus = true
  }
  onBlurQualification() {
    this.qualificationFocus = false
  }
  onFocusOccupation() {
    this.occupationFocus = true
  }
  onBlurOccupation() {
    this.occupationFocus = false
  }

  onFocusIncome() {
    this.incomeFocus = true

  }
  onBlurIncome() {
    this.incomeFocus = false
  }

  onFocusExperience() {
    this.experienceFocus = true
  }
  onBlurExperience() {
    this.experienceFocus = false
  }

  onFocusEmail() {
    this.emailFocus = true
  }
  onBlurEmail() {
    this.emailFocus = false
  }

  onFocusContact() {
    this.contactFocus = true
  }
  onBlurContact() {
    this.contactFocus = false
  }
  onFocusCity() {
    this.cityFocus = true
  }
  onBlurCity() {
    this.cityFocus = false
  }

  onFocusPostelCode() {
    this.postelCodeFocus = true
  }
  onBlurPostelCode() {
    this.postelCodeFocus = false
  }

  onFocusDist() {
    this.distFocus = true
  }

  onBlurDist() {
    this.distFocus = false
  }

  onFocusAddress() {
    this.addressFocus = true
  }
  onBlurAddress() {
    this.addressFocus = false
  }





  newLicenseForm: FormGroup = new FormGroup({
    shopName: new FormControl('', [Validators.required]),
    shopType: new FormControl('', [Validators.required]),
    shopDistrict: new FormControl('', Validators.required),
    shopAddress: new FormControl('', [Validators.required]),
    personName: new FormControl('', [Validators.required]),
    fatherName: new FormControl('', [Validators.required]),
    dob: new FormControl('', Validators.required),
    qualification: new FormControl('', [Validators.required]),
    occupation: new FormControl('', [Validators.required]),
    income: new FormControl('', [Validators.required]),
    experience: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    contact: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    postelCode: new FormControl('', [Validators.required]),
    district: new FormControl('', [Validators.required])
  })


  onChangeDist(e: any) {

  }



 message :any ='';
 submitSuccess :any = false

  onSubmit() {
    console.log('SUBMIT TRIGGERED')
    this.isFormSubmitted = true
    this.newLicenseForm.markAllAsTouched()
    this.formValue = this.newLicenseForm.value
    console.log(this.newLicenseForm.valid)

   if(this.newLicenseForm.valid){
       this.message = 'Registration Successful.....'
       this.newLicenseForm.reset();

       this.submitSuccess = true
       this.isFormSubmitted = false
   }else{
    this.message = 'Fill all the required fields ...'
   }
  }

}


