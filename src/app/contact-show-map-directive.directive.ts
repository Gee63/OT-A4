import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appContactShowMapDirective]'
})
export class ContactShowMapDirectiveDirective {

  constructor() { }

  @HostListener('click') click(){
    console.log('in');
    if( (<HTMLElement>document.getElementById('contact-overlay')).classList.contains('showMap')){
      (<HTMLElement>document.getElementById('contact-overlay')).classList.remove('showMap');
      (<HTMLElement>document.getElementById('googleMap')).classList.add('blur')
    }
    else{
      (<HTMLElement>document.getElementById('contact-overlay')).classList.add('showMap');
      (<HTMLElement>document.getElementById('googleMap')).classList.remove('blur')
    }

  }

}

