import {Component, OnInit } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {stringDistance} from "codelyzer/util/utils";

@Component({
  selector: 'app-careers-component',
  templateUrl: './careers-component.component.html',
  styleUrls: ['./careers-component.component.css']
})
export class CareersComponentComponent implements OnInit  {

  public isMobile: boolean;
  vacancies:FirebaseListObservable<any>;

  //modal setup
  jobTitle;
  jobDescription;
  jobTeam;
  constructor(db:AngularFireDatabase) {
    /*db code*/
    this.vacancies = db.list('/vacancies');
    /*this.vacancies.subscribe(snapshots => {
        snapshots.forEach(snapshot => {
          console.log(snapshot.key);
          console.log(snapshot.val());
        });
      });*/
    /*modal setup*/
  }


  openModalContent(description, title, team){
    document.getElementById('modal').classList.add('active');
    console.log(description + ' ,' + title + ' ,' + team);
    this.jobTitle = title;
    this.jobDescription = description;
    this.jobTeam = team;
  }

  closeModal(){
    document.getElementById('modal').classList.remove('active');
  }


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
