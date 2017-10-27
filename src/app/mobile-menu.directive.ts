import {Directive, HostListener} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Renderer2 } from '@angular/render';

@Directive({
  selector: '[appMobileMenuDirective]'
})
export class MobileMenuDirective {

  containerToMoveDown;
  urlStringStrip;

  constructor( private activatedRoute: ActivatedRoute, private render: Renderer2) {
  }

  @HostListener('click') click() {

    /*get the url without query strings*/
    this.urlStringStrip = this.activatedRoute.snapshot.firstChild.url[0].path;

    // set container based on the url - not a great way to accomplish the move down of content but works for now.
    if (this.urlStringStrip === "home") {
      this.containerToMoveDown = "home-container";
    }
    else if (this.urlStringStrip === "careers") {
      this.containerToMoveDown = "careers-container";
    }
    else if (this.urlStringStrip === "culture") {
      this.containerToMoveDown = "culture-container";
    }
    else if (this.urlStringStrip === "whatwedo") {
      this.containerToMoveDown = "what-we-do-container";
    }
    else if (this.urlStringStrip === "contact") {
      this.containerToMoveDown = "contact-container";
    }

    if (document.getElementById('nav-slide-menu').classList.contains('open')) {
      document.getElementById('nav-slide-menu').classList.remove('open');
      document.getElementById('nav-bar').classList.remove('open');
      document.body.classList.remove("no-scroll");
      document.getElementById(this.containerToMoveDown).classList.add('SlideUp');
      document.getElementById(this.containerToMoveDown).classList.remove('SlideDown');

      /*remove slideup class after animation completed ( transform was causeing model popups to display funny )*/


    }
    else {
      document.getElementById('nav-slide-menu').classList.add('open');
      document.getElementById('nav-bar').classList.add('open');
      document.body.classList.add("no-scroll");
      document.getElementById(this.containerToMoveDown).classList.remove('SlideUp');
      document.getElementById(this.containerToMoveDown).classList.add('SlideDown');
    }


  }

}


