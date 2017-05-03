import { Component, OnInit, Inject } from '@angular/core';
import { Author } from '../shared/models/author.model';
import { AuthorService } from '../shared/models/author.service';
import { Router } from '@angular/router';
import { AngularFire, FirebaseListObservable, FirebaseRef } from 'angularfire2';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  firebase: any;
  constructor(private authServ: AuthorService, private router: Router, @Inject(FirebaseRef) fb) {
    this.firebase = fb.storage();
  }

  ngOnInit() {
    this.author = {
      firstName: this.firstName, lastName: this.lastName, institute: this.institute,
      city: this.city, country: this.country, otherAuthors: [], email: this.email,
      presentationType: this.presentationType, abstractContent: this.abstractContent,
      keywords: this.keywords, titleOfStudy: this.titleOfStudy
    }
  }

  author: Author;

  firstName: string = "";
  lastName: string = "";
  institute: string = "";
  city: string = "";
  country: string = "";
  email: string = "";
  firstName1: string = "";
  lastName1: string = "";
  institute1: string = "";
  city1: string = "";
  country1: string = "";
  email1: string = "";
  abstractContent: string = "";
  keywords: string = "";
  presentationType: string = "";
  titleOfStudy: string = "";

  save() {
    this.author.firstName = this.firstName;
    this.author.lastName = this.lastName;
    this.author.institute = this.institute;
    this.author.city = this.city;
    this.author.country = this.country;
    this.author.email = this.email;
    this.author.presentationType = this.presentationType;
    this.author.abstractContent = this.abstractContent;
    this.author.keywords = this.keywords;
    this.author.titleOfStudy = this.titleOfStudy;
    for (let selectedFile of [(<HTMLInputElement>document.getElementById('file')).files[0]]) {
      console.log(selectedFile);
      let storageRef = this.firebase.ref(`/abstracts/` + this.email + `/`+ selectedFile.name);
      this.author.abstractContent = selectedFile.name;
      let uploadTask = storageRef.put(selectedFile).then(snapshot => {
        this.msg = "File selected successfully";
      });
    }
    this.author.approved = false;
    this.authServ.addAuthor(this.author).then(
      success => this.router.navigate(['registrationsuceess'])
    );
  }

  saveAuthor() {
    if (this.author.otherAuthors == undefined || this.author.otherAuthors == null) {
      this.author.otherAuthors = [];
    }
    let auth: Author = {
      id: this.author.otherAuthors.length + 1,
      firstName: this.firstName1, lastName: this.lastName1,
      institute: this.institute1, city: this.city1,
      country: this.country1, email: this.email1
    };
    this.author.otherAuthors.push(auth);
  }

  addNew() {
    this.firstName1 = "";
    this.lastName1 = "";
    this.email1 = "";
    this.institute1 = "";
    this.city1 = "";
    this.country1 = "";
  }

  msg: string;

  abstractFile: File;

}
