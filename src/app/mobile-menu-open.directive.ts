import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appMobileMenuOpen]'
})
export class MobileMenuOpenDirective {

  constructor() {
  }

  @HostListener('click') click() {
    document.getElementById('nav-slide-menu').classList.add('open');
  }
}
