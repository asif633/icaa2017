import { Component, OnInit } from '@angular/core';
import { InvitedService } from '../shared/models/invited.services';
import { Observable } from 'rxjs/Observable';
import { Plenary } from '../shared/models/plenary.model';

@Component({
  selector: 'app-invitedspeakers',
  templateUrl: './invitedspeakers.component.html',
  styleUrls: ['./invitedspeakers.component.css']
})
export class InvitedspeakersComponent implements OnInit {

  constructor(private invServ: InvitedService) { }

  ngOnInit() {
    this.invitedSpeakers = this.invServ.getPlenarys();
  }

  invitedSpeakers: Observable<Plenary[]>;

}
