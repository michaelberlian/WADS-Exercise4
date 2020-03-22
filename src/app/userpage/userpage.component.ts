import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {
  
  user: firebase.User;

  constructor(
    private authService: AuthService, 
    private router: Router
  ) { }

  ngOnInit(): void {
    this.authService.getUserState()
      .subscribe( user => {
        this.user = user;
      })
  }

  logout() {
    this.authService.logout();
  }

  login() {
    this.router.navigate(["/"])
  }

}
