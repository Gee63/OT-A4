import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';


@Component({
  selector: 'app-admin-component',
  templateUrl: './admin-component.component.html',
  styleUrls: ['./admin-component.component.css']
})
export class AdminComponentComponent implements OnInit {

  applicants:FirebaseListObservable<any>;


  constructor(db:AngularFireDatabase) {
    this.applicants = db.list('/applicants');
  }


  //Start - use this for admin panel - the dummy var forces the vacancies elements to update in real time
  //dummy:number = 0;
  //pushTerm(){
  //  console.log('update dummy: ' + this.dummy);//
  //  this.vacancies.push({
  //    "description" : `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
  //  unknown printer took a galley of type and scrambled it to make a type specimen book.
  //  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. `,
  //    "positionTitle" : "retention marketer",
  //    "department" : "retention marketing",
  //    "link" : "retention-marketing-icon"
  //  });
  //  this.dummy++;
  //}
//End - use this for admin panel - the dummy var forces the vacancies elements to update in real time

  ngOnInit() {
  }
}

