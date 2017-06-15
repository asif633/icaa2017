import { Component, OnInit } from '@angular/core';
import { PlenaryService } from '../shared/models/plenary.service';
import { Plenary } from '../shared/models/plenary.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-keynotespeakers',
  templateUrl: './keynotespeakers.component.html',
  styleUrls: ['./keynotespeakers.component.css']
})
export class KeynotespeakersComponent implements OnInit {

  constructor(private plServ: PlenaryService) { }

  plenaries: Observable<Plenary[]>;

  ngOnInit() {
   this.plenaries = this.plServ.getPlenarys(); 
 }

}
