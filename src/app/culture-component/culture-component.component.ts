import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-culture-component',
  templateUrl: './culture-component.component.html',
  styleUrls: ['./culture-component.component.css']
})
export class CultureComponentComponent implements OnInit {

  perks: FirebaseListObservable<any>;

  constructor(db: AngularFireDatabase) {
    this.perks = db.list('/perks');
    /*this.perks.subscribe(snapshots => {
      snapshots.forEach(snapshot => {
        console.log(snapshot.key);
        console.log(snapshot.val());
      });
    });*/
  }

  ngOnInit() {
  }

}
