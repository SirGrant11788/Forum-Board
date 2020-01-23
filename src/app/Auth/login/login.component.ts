import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import { AuthService } from '../auth-service';


@Component({
templateUrl: './login.component.html'
})
export class LoginComponent {
enteredUserNameError = 'Please enter a user name in the correct form';
enteredEmailError = 'Please enter a correctly formatted e-mail addresss ';
enteredpostError = 'Please enter an post of no more than 100 characters';
enteredPasswordError = 'Please enter a password that contains lower case,' +
'upper case letters and at least one number';
constructor(public authService: AuthService) {}
onLogin(form: NgForm) {
if (form.invalid) {
return;
}
this.authService.login(form.value.enteredEmail, form.value.enteredPassword, form.value.enteredUsername);
console.log(form.value);
}
}
