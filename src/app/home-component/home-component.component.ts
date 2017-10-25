import {Component, OnInit, ElementRef} from '@angular/core';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  MyContainerID;

  constructor(private el: ElementRef) {
    //console.log(this.el.nativeElement);
    this.MyContainerID = "home-container";
  }

  ngOnInit() {
   // console.log(this.el.nativeElement.children[0].id);
  }
}
