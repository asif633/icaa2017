import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user.model';
import { LoginService } from '../shared/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private logServ: LoginService, private router: Router) { }

  ngOnInit() {
  }
  email: string;
  password: string;

  login(){
    let user: User = {email: this.email, password: this.password};
    this.logServ.login(user).then(
      success => this.router.navigate(['/manageusers'])
    );
  }

}
