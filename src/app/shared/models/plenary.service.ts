import { Injectable, Inject } from '@angular/core';
import { Plenary } from './plenary.model';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/mergeMap';
import { AngularFire, FirebaseListObservable, FirebaseRef } from 'angularfire2';

@Injectable()
export class PlenaryService {

    private uid: string;
    private firebasestorage: any;

    initializeNew(): Plenary {
        return { name: '', location: '', flag: '', photoUrl: '' };
    }

    constructor(private af: AngularFire, @Inject(FirebaseRef) fb) {
        this.firebasestorage = fb.storage();
    }

    addPlenary(cat: Plenary, file: File) {
        let key = this.af.database.list('plenary-speakers').$ref.ref.push().key;
        return this.firebasestorage.ref(`plenary-speakers` + `/` + key + `/` + cat.name).put(file).then(
            snapshot => {
                cat.photoUrl = snapshot.downloadURL;
                return this.af.database.object('plenary-speakers/' + key).set(cat);
            });
    }

    updatePlenary(cas: Plenary, file: File) {
        if (file != undefined && file != null) {
            this.firebasestorage.ref(`plenary-speakers` + `/` + cas.$key + `/` + cas.name).put(file).then(
                snapshot => {
                    cas.photoUrl = snapshot.downloadURL;
                    return this.af.database.object('plenary-speakers/' + cas.$key).update({ name: cas.name, location: cas.location, flag: cas.flag, photoUrl: cas.photoUrl });
                });
        }
        else {
            return this.af.database.object('plenary-speakers/' + cas.$key).update({ name: cas.name, location: cas.location, flag: cas.flag, photoUrl: cas.photoUrl });
        }
    }

    getPlenarys(): Observable<Plenary[]> {
        return this.af.database.list('plenary-speakers');
    }

    deletePlenary(cas: Plenary) {
        return this.af.database.list('plenary-speakers').remove(cas.$key).then(
            onResolve => {
                return this.firebasestorage.ref(`plenary-speakers` + `/` + cas.$key + `/` + cas.name).delete();
            }
        );
    }

}