import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Plenary } from '../../shared/models/plenary.model';
import { IntComService } from '../../shared/models/intcom.service';

@Component({
  selector: 'app-int-committee-table',
  templateUrl: './int-committee-table.component.html',
  styleUrls: ['./int-committee-table.component.css']
})
export class IntCommitteeTableComponent implements OnInit {

  plenarys: Observable<Plenary[]>;

  constructor(private prodServ: IntComService) { }

  ngOnInit() {
    this.plenarys = this.prodServ.getPlenarys();
  }

  @Output() selectPlenary = new EventEmitter<Plenary>();
  @Output() add = new EventEmitter<boolean>();

  selectedPlenary(plenary: Plenary) {
    this.selectPlenary.emit(plenary);
    this.add.emit(false);
  }

  initializeNew() {
    this.selectPlenary.emit(this.prodServ.initializeNew());
    this.add.emit(true);
  }


}
