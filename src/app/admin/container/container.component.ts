import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../shared/login.service';
import { Router } from '@angular/router';
import { Author } from '../../shared/models/author.model';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  constructor(private logServ: LoginService, private router: Router) { }

  ngOnInit() {
  }

  logout(){
    this.logServ.logout().then(
      success => this.router.navigate(['/'])
    );
  }

  getSelAuthor(event: Author){
    this.auth = event;
  }

  auth: Author;
}
