import { Component, OnInit } from '@angular/core';
import {FirebaseService} from './firebase.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'frontend';
  constructor(private firebaseService : FirebaseService){}

  async ngOnInit(){
    let responses = await this.firebaseService.getPeople()
    console.log(responses[0].payload.doc.data())
  }

  markerIconUrl() {
    return require('../assets/danger.png')
  }

  marker_click($data){
    console.log('hola')
  }
}
