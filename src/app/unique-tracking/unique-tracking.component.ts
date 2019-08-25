import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';   
import {FirebaseService} from './../firebase.service'

@Component({
  selector: 'app-unique-tracking',
  templateUrl: './unique-tracking.component.html',
  styleUrls: ['./unique-tracking.component.css']
})
export class UniqueTrackingComponent implements OnInit {
  personal_info 
  tracking 
  click = false
  active_position 
  active_time
  person_id
  constructor(private route: ActivatedRoute, private firebaseService : FirebaseService) {
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async ngOnInit() {
    await this.route.params.subscribe(params => {
      this.person_id = params.id
    })
    await this.firebaseService.get_specific_info(this.person_id)
      .then((data) =>  this.personal_info = data.data() )
    
    await this.firebaseService.get_tracking(this.person_id)
      .then((data) => this.tracking = data.data().ubicacion)    
  
    this.refresh_map()
  }

  async refresh_map(){
    
    await this.firebaseService.get_specific_info(this.person_id)
      .then((data) =>  this.personal_info = data.data() )
    
    await this.firebaseService.get_tracking(this.person_id)
      .then((data) => this.tracking = data.data().ubicacion)  
    
    //await this.sleep(2000);
    //this.refresh_map()
  }

  markerIconUrl() {
    return require('../../assets/danger.png')
  }

  marker_click($data){
    this.click = true
    this.active_position = $data
    this.active_time = (new Date(this.active_position.time.seconds))
  }
}
