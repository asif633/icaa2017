import { Injectable, Inject } from '@angular/core';
import { Plenary } from './plenary.model';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/mergeMap';
import { AngularFire, FirebaseListObservable, FirebaseRef } from 'angularfire2';

@Injectable()
export class InvitedService {

    private uid: string;
    private firebasestorage: any;

    initializeNew(): Plenary {
        return { name: '', location: '', flag: '' };
    }

    constructor(private af: AngularFire, @Inject(FirebaseRef) fb) {
        this.firebasestorage = fb.storage();
    }

    addPlenary(cat: Plenary) {
        return this.af.database.list('invited-speakers').push(cat);
    }

    updatePlenary(cas: Plenary) {
        return this.af.database.object('invited-speakers/' + cas.$key).update({ name: cas.name, location: cas.location, flag: cas.flag });
    }

    getPlenarys(): Observable<Plenary[]> {
        return this.af.database.list('invited-speakers');
    }

    deletePlenary(cas: Plenary) {
        return this.af.database.list('invited-speakers').remove(cas.$key);
    }

}