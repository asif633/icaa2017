import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../shared/models/author.service';
import { Author } from '../shared/models/author.model';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.css']
})
export class ParticipantsComponent implements OnInit {

  constructor(private authServ: AuthorService) { }

  ngOnInit() {
    this.authServ.getAuthors().subscribe(auths => 
    {
      this.participants = auths.filter(auth => auth.approved == true);
    }
  );
  }

  participants: Author[];

}
