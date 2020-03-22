import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm;
  successMessage;
  errorMessage;

  constructor(
    private formBuilder: FormBuilder,
    private authService : AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:'',
      password:'',
    });
  }

  consoleLog(value){
    console.log(value.email)
    console.log(value.password)
  }

  onSubmit(value){
    console.log(value.password)
    this.authService.doLogin(value)
    .then(res => {
      this.successMessage = "succesfully login";
      this.errorMessage = "";
      this.router.navigate(['/userpage'])
    }, err => {
      console.log(err);
      this.successMessage = "";
      this.errorMessage = err.message;
    })
  }
}
