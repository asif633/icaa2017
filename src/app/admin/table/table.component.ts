import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Author } from '../../shared/models/author.model';
import { AuthorService } from '../../shared/models/author.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(private authSerc: AuthorService) { }

  ngOnInit() {
    this.authors = this.authSerc.getAuthors();
  }
  authors: Observable<Author[]>;

  @Output() selectedAuth = new EventEmitter<Author>();

  getAuth(auth: Author){
    this.selectedAuth.emit(auth);
  }

  selAuth: Author;

  onRowSelect(event){
    this.selectedAuth.emit(event.data);
  }

  onRowUnselect(event){
    this.selectedAuth.emit(event.data);
  }

}
