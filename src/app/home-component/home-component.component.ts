import {Component, OnInit, HostListener} from '@angular/core';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {


  constructor() {

  }

  backgroundX;
  backgroundY;

  X;
  Y;

  /*set component vars to the output event values - then use them to edit the inline styles to make the background move with the mouse movements*/
  transformX(e){
    this.backgroundX = e;

    this.X = e;
  }

  transformY(e){
    this.backgroundY = e;

    this.Y = e;
  }






  ngOnInit() {

  }
}


