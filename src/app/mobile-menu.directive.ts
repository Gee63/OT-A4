import {Directive, HostListener} from '@angular/core';
import {Router} from '@angular/router';

@Directive({
  selector: '[appMobileMenuDirective]'
})
export class MobileMenuDirective {

  containerToMoveDown;

  constructor(private router:Router) {

  }

  @HostListener('click') click() {

    // set container based on the url - not a great way to accomplish the move down of content but works for now.
    if (this.router.url === "/home" || this.router.url === "/") {
      this.containerToMoveDown = "home-container";
    }
    else if (this.router.url === "/careers") {
      this.containerToMoveDown = "careers-container";
    }
    else if (this.router.url === "/culture") {
      this.containerToMoveDown = "culture-container";
    }
    else if (this.router.url === "/whatwedo") {
      this.containerToMoveDown = "what-we-do-container";
    }
    else if (this.router.url === "/contact") {
      this.containerToMoveDown = "contact-container";
    }

    if (document.getElementById('nav-slide-menu').classList.contains('open')) {
      document.getElementById('nav-slide-menu').classList.remove('open');
      document.getElementById('nav-bar').classList.remove('open');
      document.body.classList.remove("no-scroll");
      document.getElementById(this.containerToMoveDown).classList.add('SlideUp');
      document.getElementById(this.containerToMoveDown).classList.remove('SlideDown');
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




