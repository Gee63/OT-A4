import {Component, OnInit } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@Component({
  selector: 'app-careers-component',
  templateUrl: './careers-component.component.html',
  styleUrls: ['./careers-component.component.css']
})
export class CareersComponentComponent implements OnInit  {

  public isMobile: boolean;
  vacancies:FirebaseListObservable<any>;

  constructor(db:AngularFireDatabase) {
    this.vacancies = db.list('/vacancies');
  }

  state: string = 'small';

  ngOnInit() {
    console.log('do something on init: ' + this.isMobile);
    /*upgrade this mobile check before deployment*/
    if(window.innerWidth <= 800 && window.innerHeight <= 600){
      this.isMobile = true;
      console.log('true: ' + this.isMobile);
    }
    else{
      this.isMobile = false;
      console.log('false: ' + this.isMobile);
    }

    console.log('do something end of init: ' + this.isMobile);
  }
}
