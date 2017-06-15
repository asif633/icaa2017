import { Component, OnInit } from '@angular/core';
import { Plenary } from '../../shared/models/plenary.model';

@Component({
  selector: 'app-committee',
  templateUrl: './committee.component.html',
  styleUrls: ['./committee.component.css']
})
export class CommitteeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  selectedPlenary: Plenary;
  addBool: boolean;

  getSelectedPlenary(event) {
    this.selectedPlenary = event;
  }

  addOrUpdate(event) {
    this.addBool = event;
  }

  selectedPlenaryL: Plenary;
  addBoolL: boolean;

  getSelectedPlenaryL(event) {
    this.selectedPlenaryL = event;
  }

  addOrUpdateL(event) {
    this.addBoolL = event;
  }

}
