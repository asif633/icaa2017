import { Component, OnInit } from '@angular/core';
import { Plenary } from '../../shared/models/plenary.model';

@Component({
  selector: 'app-admin-invited-speakers',
  templateUrl: './admin-invited-speakers.component.html',
  styleUrls: ['./admin-invited-speakers.component.css']
})
export class AdminInvitedSpeakersComponent implements OnInit {

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

}
