import { Injectable } from '@angular/core';
import { Plenary } from './plenary.model';
import { Observable } from 'rxjs/Rx';
import { IntComService } from './intcom.service';

import { Router, Resolve, RouterStateSnapshot,
         ActivatedRouteSnapshot } from '@angular/router';
@Injectable()
export class IntComResolver implements Resolve<Observable<Plenary[]>> {
  
  constructor(private ps: IntComService, private router: Router) {}
  
  resolve(route: ActivatedRouteSnapshot): Observable<Plenary[]> {
    return this.ps.getPlenarys();
  }
}