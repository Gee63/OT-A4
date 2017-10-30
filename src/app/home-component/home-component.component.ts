import {Component, OnInit, ElementRef} from '@angular/core';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  MyContainerID;

  constructor(private el: ElementRef) {
  }

  backgroundX;
  backgroundY;

  /*set component vars to the output event values - then use them to edit the inline styles to make the background move with the mouse movements*/
  transformX(e){
    console.log(e);
    this.backgroundX = e;

  }

  transformY(e){
    console.log(e);
    this.backgroundY = e;
  }
  ngOnInit() {
   // console.log(this.el.nativeElement.children[0].id);
  }
}


