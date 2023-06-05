import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  err = '';

  loginForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    password: new FormControl(''),
  });

  onSubmit() {
    console.log(this.loginForm.value);

    const { firstName, lastName, password} = this.loginForm.value

    if(!(firstName && lastName && password)){
      return this.err = 'please fill the blank fields'
    }

    return
  }
}
