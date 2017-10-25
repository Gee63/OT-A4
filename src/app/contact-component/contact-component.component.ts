import { Component, OnInit } from '@angular/core';
import {AgmMarker} from '@agm/core/directives/marker';


@Component({
  selector: 'app-contact-component',
  templateUrl: './contact-component.component.html',
  styleUrls: ['./contact-component.component.css']

})

export class ContactComponentComponent implements OnInit {

  angularReady;

  // google maps zoom level
  zoom: number = 18;
  lat: number = -26.1331097;
  lng: number = 28.0677343;

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }

   marker = [
     {
       lat: -26.133414,
       lng: 28.068387,
       label: 'Osiris Trading',
       iconUrl: 'assets/MapMarkerOsiris.png',
       draggable: true
     },
    {
      lat: -26.1315628,
      lng: 28.06863,
      label: 'Churchills',
      iconUrl: 'assets/MapMarker.png',
      draggable: true
    }
  ];

  constructor() {
  }

  ngOnInit() {
    this.angularReady = true;
    console.log('angularReady: ', this.angularReady);
  }

}








