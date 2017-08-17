import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-menu-component',
  templateUrl: './mobile-menu-component.component.html',
  styleUrls: ['./mobile-menu-component.component.css']
})
export class MobileMenuComponentComponent implements OnInit {

  constructor() {
    console.log('ok');
  }


  mobileMenu: HTMLElement = document.getElementById('nav-slide-menu');

  openMenu(){
    console.log('open');
    this.mobileMenu.classList.add('open');
  }

  closeMenu(){
    console.log('close');
    this.mobileMenu.classList.remove('open');
  }



  ngOnInit() {
    console.log('ok');
  }


}
