import { Component, OnInit } from '@angular/core';
import { LocalComService } from '../shared/models/localcom.service';
import { IntComService } from '../shared/models/intcom.service';
import { Observable } from 'rxjs/Observable';
import { Plenary } from '../shared/models/plenary.model';

@Component({
  selector: 'app-committiees',
  templateUrl: './committiees.component.html',
  styleUrls: ['./committiees.component.css']
})
export class CommittieesComponent implements OnInit {

  constructor(private localComServ: LocalComService, private intComServ: IntComService) { }

  ngOnInit() {
    this.intmembers = this.intComServ.getPlenarys();
    this.localmembers = this.localComServ.getPlenarys();
  }

  intmembers: Observable<Plenary[]>;
  localmembers: Observable<Plenary[]>;

}
