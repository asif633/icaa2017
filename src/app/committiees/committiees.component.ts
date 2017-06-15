import { Component, OnInit } from '@angular/core';
import { LocalComService } from '../shared/models/localcom.service';
import { IntComService } from '../shared/models/intcom.service';
import { Observable } from 'rxjs/Observable';
import { Plenary } from '../shared/models/plenary.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-committiees',
  templateUrl: './committiees.component.html',
  styleUrls: ['./committiees.component.css']
})
export class CommittieesComponent implements OnInit {

  constructor(private localComServ: LocalComService, private intComServ: IntComService, private actRoute: ActivatedRoute) { }

  ngOnInit() {
    this.actRoute.data
    .subscribe((data: { locmems: Observable<Plenary[]> }) => {
      //this.intmembers = data.intmems;
      //this.localmembers = data.locmems;
    });
    //this.actRoute.snapshot.data['contact'];
    this.intmembers = this.intComServ.getPlenarys();
    this.localmembers = this.localComServ.getPlenarys();
  }

  intmembers: Observable<Plenary[]>;
  localmembers: Observable<Plenary[]>;

}
