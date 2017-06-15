import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Plenary } from '../../shared/models/plenary.model';
import { InvitedService } from '../../shared/models/invited.services';

@Component({
  selector: 'app-admin-invited-speaker-table',
  templateUrl: './admin-invited-speaker-table.component.html',
  styleUrls: ['./admin-invited-speaker-table.component.css']
})
export class AdminInvitedSpeakerTableComponent implements OnInit {

  plenarys: Observable<Plenary[]>;

  constructor(private prodServ: InvitedService) { }

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
