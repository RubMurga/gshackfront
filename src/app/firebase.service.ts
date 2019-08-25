import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';



@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private db : AngularFirestore) { }

  getPeople(){
    return new Promise<any>((resolve, reject) => {
      this.db.collection('alertas').snapshotChanges()
      .subscribe(snapshots => {
        resolve(snapshots)
      })
    })
  }

}
