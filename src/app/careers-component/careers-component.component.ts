import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-careers-component',
  templateUrl: './careers-component.component.html',
  styleUrls: ['./careers-component.component.css']
})
export class CareersComponentComponent implements OnInit {

  vacancies: FirebaseListObservable<any>;

  constructor(db: AngularFireDatabase) {
    this.vacancies = db.list('/vacancies');
  }

  ngOnInit() {
  }
}



