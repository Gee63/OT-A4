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
    //console.log(description + ', ' + title + ', ' + department + ', ' + link);
    this.jobTitle = title;
    this.jobDescription = description;
    this.jobDepartment = department;
    this.iconLink = link;
  }

  closeModal(){
    document.getElementById('modal').classList.remove('active');
  }

  ngOnInit() {
  }


}
