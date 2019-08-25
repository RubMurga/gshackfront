import { Component, OnInit } from '@angular/core';
import {FirebaseService} from './../firebase.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private firebaseService : FirebaseService) { }

  async ngOnInit(){
    let responses = await this.firebaseService.getPeople()
    console.log(responses[0].payload.doc.data())
  }

  markerIconUrl() {
    //return require('../../assets/danger.png')
  }

  marker_click($data){
    console.log('hola')
  }

}
