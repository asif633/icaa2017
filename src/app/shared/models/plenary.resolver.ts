import { Injectable } from '@angular/core';
import { Plenary } from './plenary.model';
import { Observable } from 'rxjs/Rx';
import { PlenaryService } from './plenary.service';
import { Router, Resolve, RouterStateSnapshot,
         ActivatedRouteSnapshot } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';

@Injectable()
export class PlenarysResolver implements Resolve<any> {
  
  constructor(private ps: PlenaryService, private router: Router) {}
  
  resolve(route: ActivatedRouteSnapshot) {
    return this.ps.getPlenarys().map(res => res).first()
  }
}