import { Component, OnInit } from '@angular/core';
import { PlenaryService } from '../shared/models/plenary.service';
import { Plenary } from '../shared/models/plenary.model';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-keynotespeakers',
  templateUrl: './keynotespeakers.component.html',
  styleUrls: ['./keynotespeakers.component.css']
})
export class KeynotespeakersComponent implements OnInit {

  constructor(private plServ: PlenaryService, private actRoute: ActivatedRoute) { }

  plenaries: Observable<Plenary[]>;

  ngOnInit() {
    this.plenaries = this.plServ.getPlenarys();
 }

}
