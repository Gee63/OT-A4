import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appMobileMenuClose]'
})
export class MobileMenuCloseDirective {

  constructor() { }

  @HostListener('click') click() {
    document.getElementById('nav-slide-menu').classList.remove('open');
  }

}
