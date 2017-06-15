import { Injectable } from '@angular/core';
import { Plenary } from './plenary.model';
import { Observable } from 'rxjs/Rx';
import { LocalComService } from './localcom.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';

import { Router, Resolve, RouterStateSnapshot,
         ActivatedRouteSnapshot } from '@angular/router';
@Injectable()
export class LocalComResolver implements Resolve<Observable<Plenary[]>> {
  
  constructor(private ps: LocalComService, private router: Router) {}
  
  resolve(route: ActivatedRouteSnapshot): Observable<Plenary[]> {
    return this.ps.getPlenarys().map(res => res).first();
  }
}