import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { AuthServiceService } from '../auth-service.service';
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-admin-component',
  templateUrl: './admin-component.component.html',
  styleUrls: ['./admin-component.component.css'],
  providers: [AuthServiceService]
})
export class AdminComponentComponent implements OnInit {

  applicants:FirebaseListObservable<any>;
  vacancies:FirebaseListObservable<any>;

  description;
  positionTitle;
  department;
  link;


  constructor(db:AngularFireDatabase, private authService: AuthServiceService) {
    this.applicants = db.list('/applicants');
    this.vacancies = db.list('/vacancies');
  }


  addVacancy(){
    /*set values*/
    this.description = (<HTMLInputElement>document.getElementById('description')).value;
    this.positionTitle = (<HTMLInputElement>document.getElementById('position')).value;
    this.department = (<HTMLInputElement>document.getElementById('department')).value;

    console.log('dep value: ' + this.department);

    this.link = this.department + '-icon';

    console.log('link: ' + this.link);


    /*push values to db*/
    firebase.database().ref('vacancies/').push({
      'description' : this.description,
      'positionTitle' : this.positionTitle,
      'department' : this.department,
      'link' : this.link
    })
  }

  deleteVacancy(key){
console.log('key: ' + key);
    firebase.database().ref('vacancies/' + key).update({
      'description' : null,
      'positionTitle' : null,
      'department' : null,
      'link' : null
    });
  }

  logout(){
    console.log('made it here');
    this.authService.logout();
  }

  ngOnInit() {
  this.authService.checkLogin();
    }

}




