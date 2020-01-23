import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import { AuthService } from '../auth-service';
import { MatSelectChange, MatSelect } from '@angular/material';

@Component({
templateUrl: '../signup/signup.component.html'
})
export class SignUpComponent {
  selectedregion = '';
enteredUserNameError = 'Please enter a user name in the correct form';
enteredEmailError = 'Please enter a correctly formatted e-mail addresss ';
enteredPostError = 'Please enter an post of no more than 50 characters';
enteredPasswordError = 'Please enter a password that contains lower case,' +
'upper case letters and at least one number';
constructor(public authService: AuthService) {}
onSignup(form: NgForm) {
if (form.invalid) {
return;
}




this.authService.createUser(form.value.enteredEmail, form.value.enteredPassword, form.value.enteredUserName);
console.log('form' + form.value);
}

selectChangeHandler(event: any) {
  this.selectedregion  = event.target.value;
  console.log(this.selectedregion);
}

}
