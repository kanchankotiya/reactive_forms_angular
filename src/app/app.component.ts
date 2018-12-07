import { Component } from '@angular/core';
import {  FormBuilder,  Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  get userName() {
    return this.registrationForm.get('userName')
  }

  get password() {
    return this.registrationForm.get('password')
  }

  get confirmPassword() {
    return this.registrationForm.get('confirmPassword')
  }

  get city() {
    return this.registrationForm.get('city')
  }

  constructor(private fb: FormBuilder) { }
  /*
    registrationForm = new FormGroup({
      userName: new FormControl('Kanchan'),
      password: new FormControl(''),
      confirmPassword: new FormControl(''),
      address: new FormGroup({
        city: new FormControl(''),
        state: new FormControl(''),
        zipCode: new FormControl('')
      })
    });  
  */  


  registrationForm = this.fb.group({
    userName: ['', [Validators.required, Validators.minLength(3)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    address: this.fb.group({
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipCode: ['',Validators.required]
    }),
  });


  loadApiData() {
    this.registrationForm.patchValue({
      userName: 'Nancy',
      password: 'test',
      confirmPassword: 'test'
    });
  }
}
