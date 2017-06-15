import { Injectable } from '@angular/core';
import { Plenary } from './plenary.model';
import { Observable } from 'rxjs/Rx';
import { InvitedService } from './invited.services';

import { Router, Resolve, RouterStateSnapshot,
         ActivatedRouteSnapshot } from '@angular/router';
@Injectable()
export class InvitedResolver implements Resolve<any> {
  
  constructor(private ps: InvitedService, private router: Router) {}
  
  resolve(route: ActivatedRouteSnapshot): Observable<Plenary[]> {
    return this.ps.getPlenarys();
  }
}