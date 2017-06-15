import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Plenary } from '../../shared/models/plenary.model';
import { PlenaryService } from '../../shared/models/plenary.service';

@Component({
  selector: 'app-plenary-table',
  templateUrl: './plenary-table.component.html',
  styleUrls: ['./plenary-table.component.css']
})
export class PlenaryTableComponent implements OnInit {

  plenarys: Observable<Plenary[]>;

  constructor(private prodServ: PlenaryService) { }

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
