import { Injectable, Inject } from '@angular/core';
import { Plenary } from './plenary.model';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/mergeMap';
import { AngularFire, FirebaseListObservable, FirebaseRef } from 'angularfire2';

@Injectable()
export class LocalComService {

    private uid: string;
    private firebasestorage: any;

    initializeNew(): Plenary {
        return { name: '', location: '', designation: ''};
    }

    constructor(private af: AngularFire, @Inject(FirebaseRef) fb) {
        this.firebasestorage = fb.storage();
    }

    addPlenary(cat: Plenary) {
        return this.af.database.list('local-committee').push(cat);
    }

    updatePlenary(cas: Plenary) {
        return this.af.database.object('local-committee/' + cas.$key).update({ name: cas.name, location: cas.location, designation: cas.designation });
    }

    getPlenarys(): Observable<Plenary[]> {
        return this.af.database.list('local-committee');
    }

    deletePlenary(cas: Plenary) {
        return this.af.database.list('local-committee').remove(cas.$key);
    }

}