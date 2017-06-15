import { Component, OnInit } from '@angular/core';
import { Plenary } from '../../shared/models/plenary.model';

@Component({
  selector: 'app-plenary',
  templateUrl: './plenary.component.html',
  styleUrls: ['./plenary.component.css']
})
export class PlenaryComponent implements OnInit {

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
