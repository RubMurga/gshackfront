import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  markerIconUrl() {
    return require('../assets/danger.png')
  }

  marker_click($data){
    console.log('hola')
  }
}
