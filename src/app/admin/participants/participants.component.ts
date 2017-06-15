import { Component, OnInit } from '@angular/core';
import { Author } from '../../shared/models/author.model';

@Component({
  selector: 'app-admin-participants',
  templateUrl: './admin-participants.component.html',
  styleUrls: ['./admin-participants.component.css']
})
export class AdminParticipantsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getSelAuthor(event: Author) {
    this.auth = event;
  }

  auth: Author;

}
