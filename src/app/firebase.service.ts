import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';



@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private db : AngularFirestore) { }


  get_specific_info($id){
    return this.db.collection('usuarios/').doc($id).get().toPromise()
  }

  get_tracking($id){
    return this.db.collection('ubicaciones/').doc($id).get().toPromise()
  }

  getPeople(){
    return new Promise<any>((resolve, reject) => {
      this.db.collection('alertas').snapshotChanges()
      .subscribe(snapshots => {
        resolve(snapshots)
      })
    })
  }

}
