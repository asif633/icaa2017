import { Injectable } from '@angular/core';
import { Author } from './author.model';
import { AngularFire } from 'angularfire2';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthorService{
    
    constructor(private af: AngularFire){}
    
    addAuthor(author: Author){
        this.getAuthors().subscribe(res => {
                author.id = res.length+1;
            });
        return this.af.database.list('authors').push(author);
    }

    updateAuthor(author: Author){
        this.af.database.list('authors').update(author.$key, {firstName: author.firstName, lastName: author.lastName, institute: author.institute, city: author.city, country: author.country, email: author.email, abstractContent: author.abstractContent, approved: author.approved, keywords: author.keywords, titleOfStudy: author.titleOfStudy, otherAuthors: author.otherAuthors || null});
    }

    getAuthors(): Observable<Author[]>{
        return this.af.database.list('authors');
    }

    getAuthor(author: Author){
        
    }

}