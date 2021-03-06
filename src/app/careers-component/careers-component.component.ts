import {Component, OnInit  } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@Component({
  selector: 'app-careers-component',
  templateUrl: './careers-component.component.html',
  styleUrls: ['./careers-component.component.css']
})
export class CareersComponentComponent implements OnInit  {

  vacancies:FirebaseListObservable<any>;


  //modal setup
  jobTitle;
  jobDescription;
  jobDepartment;
  iconLink;
  term;

  constructor(db:AngularFireDatabase) {
    /*db code*/
    this.vacancies = db.list('/vacancies');
    /*this.vacancies.subscribe(snapshots => {
        snapshots.forEach(snapshot => {
          console.log(snapshot.key);
          console.log(snapshot.val());
        });
      });*/

  }

  openModalContent(description, title, department, link){
    document.getElementById('modal').classList.add('active');
    (<HTMLElement>document.getElementById('body')).classList.add('no-scroll');
    //console.log(description + ', ' + title + ', ' + department + ', ' + link);
    this.jobTitle = title;
    this.jobDescription = description;
    this.jobDepartment = department;
    this.iconLink = link;
  }

  closeModal(){
    document.getElementById('modal').classList.remove('active');
    (<HTMLElement>document.getElementById('body')).classList.remove('no-scroll');

    //GTM DataLayer Event
    (<any>window).dataLayer.push({
      'event':'vacancy_close'
    });
  }

  applyModal(job){
    document.getElementById('modal').classList.remove('active');
    document.getElementById('apply-form-container').scrollIntoView();
    (<HTMLInputElement>document.getElementById('position')).value = job;
    (<HTMLInputElement>document.getElementById('position')).focus();
    (<HTMLElement>document.getElementById('body')).classList.remove('no-scroll');
  }

  /*transition of the container elements for mobile menu reveal was causing modal popup to behave badly. remove the slideup class after transition ends for quick fix*/
  transitionEnd(e: Event){
    (<HTMLInputElement>document.getElementById('careers-container')).classList.remove('SlideUp');
  }

  ngOnInit() {
  }


}

