import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ConditionalExpr } from '@angular/compiler';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm;
  successMessage;
  errorMessage;

  constructor(
    private authService : AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(
  ): void {
    this.registerForm = this.formBuilder.group({
      email:'',
      password:'',
    });
  }

  tryRegister(value){
    console.log(value.email)
    console.log(value.password)
    this.authService.doRegister(value)
    .then(res => {
      console.log(res);
      console.log(value.password)
      this.errorMessage = "";
      this.successMessage = "Your account has been created";
      this.router.navigate(['/userpage'])
      
    }, err => {
      console.log(err);
      this.errorMessage = err.message;
      this.successMessage = "";
    })
  }

}
