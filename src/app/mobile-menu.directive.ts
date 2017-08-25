import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appMobileMenuDirective]'
})
export class MobileMenuDirective {

  constructor() {
  }

  @HostListener('click') click() {
    if(document.getElementById('nav-slide-menu').classList.contains('open')){
      document.getElementById('nav-slide-menu').classList.remove('open');
      document.body.classList.remove("no-scroll");
    }
    else{
      document.getElementById('nav-slide-menu').classList.add('open');
      document.body.classList.add("no-scroll");
    }
  }


}
