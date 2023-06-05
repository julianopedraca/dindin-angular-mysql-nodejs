import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
})
export class SignupComponent {
  error = '';

  constructor(private http: HttpClient) {}
  signupForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    password: new FormControl(''),
  });

   async onSubmit() {
    const { firstName, lastName, password } = this.signupForm.value;
    if (!(firstName && lastName && password)) {
      return (this.error = 'please fill out all the blank fields');
    }

    this.error = '';

    const checkExists = async () => {
      const response = await lastValueFrom(
        this.http.post('http://localhost:3000/createaccount/check-exists', {
          firstName: firstName,
          lastName: lastName,
        })
      );
      if (response){
        return true;
      }
      return false;
    };

    if ( await checkExists()) {
      return this.error = 'account already exist'
    }

    return this.http
      .post('http://localhost:3000/createaccount/create', {
        firstName: firstName,
        lastName: lastName,
        password: password,
      })
      .subscribe();

  //   return this.http
  //     .get<any>('http://localhost:3000/createaccount/check')
  //     .subscribe((data) => {
  //       console.log(data);
  //     });
  }
}
