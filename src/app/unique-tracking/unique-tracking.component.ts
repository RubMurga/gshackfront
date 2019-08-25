import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';   

@Component({
  selector: 'app-unique-tracking',
  templateUrl: './unique-tracking.component.html',
  styleUrls: ['./unique-tracking.component.css']
})
export class UniqueTrackingComponent implements OnInit {

  constructor(private route: ActivatedRoute) { 
    console.log('hola')
    console.log(this.route.params)
  }

  ngOnInit() {
    console.log(this.route.params)
  }

}
