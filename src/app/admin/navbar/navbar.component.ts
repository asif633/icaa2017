import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../shared/login.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private logServ: LoginService, private router: Router, private actRoute: ActivatedRoute) { }
  
  ngOnInit() {
  }

  logout() {
    this.logServ.logout().then(
      success => this.router.navigate(['/'])
    ).catch(reject => console.log(reject.message));
  }

}
