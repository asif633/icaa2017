import { Component, OnInit, Input, Inject } from '@angular/core';
import { Author } from '../../shared/models/author.model';
import { AngularFire, FirebaseListObservable, FirebaseRef } from 'angularfire2';
import { AuthorService } from '../../shared/models/author.service';

@Component({
  selector: 'app-controllist',
  templateUrl: './controllist.component.html',
  styleUrls: ['./controllist.component.css']
})
export class ControllistComponent implements OnInit {

  firebase: any;
  constructor(private authServ: AuthorService,@Inject(FirebaseRef) fb) { 
    this.firebase = fb.storage();
  }

  ngOnInit() {
     if(this.author !=null ){
    let storageRef = this.firebase.ref(`/abstracts/` + this.author.email + `/`);
    storageRef.child(this.author.abstractContent).getDownloadURL().then(url => this.link = url);
     }
  }

  ngOnChanges(){
    if(this.author !=null){
    let storageRef = this.firebase.ref(`/abstracts/` + this.author.email + `/`);
    storageRef.child(this.author.abstractContent).getDownloadURL().then(url => this.link = url);
    }
  }
  link: string;

  @Input() author: Author;

  fileDownload() {
    let storageRef = this.firebase.ref(`/abstracts/` + this.author.email + `/`);
    storageRef.child(this.author.abstractContent).getDownloadURL().then(function (url) {
      // `url` is the download URL for 'images/stars.jpg'
      console.log(url);
      // This can be downloaded directly:
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'blob';
      xhr.onload = function (event) {
        var blob = xhr.response;
      };
      xhr.open('GET', url);
      xhr.send();

      // Or inserted into an <img> element:
      
    }).catch(function (error) {
      // Handle any errors
    });
  }

  approve(){
    this.author.approved = true;
    this.authServ.updateAuthor(this.author);
  }

}
