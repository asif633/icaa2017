import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Plenary } from '../../shared/models/plenary.model';
import { LocalComService } from '../../shared/models/localcom.service';

@Component({
  selector: 'app-local-committee-table',
  templateUrl: './local-committee-table.component.html',
  styleUrls: ['./local-committee-table.component.css']
})
export class LocalCommitteeTableComponent implements OnInit {

  plenarys: Observable<Plenary[]>;

  constructor(private prodServ: LocalComService) { }

  ngOnInit() {
    this.plenarys = this.prodServ.getPlenarys();
  }

  @Output() selectPlenaryL = new EventEmitter<Plenary>();
  @Output() addL = new EventEmitter<boolean>();

  selectedPlenaryL(plenary: Plenary) {
    this.selectPlenaryL.emit(plenary);
    this.addL.emit(false);
  }

  initializeNew() {
    this.selectPlenaryL.emit(this.prodServ.initializeNew());
    this.addL.emit(true);
  }


}
