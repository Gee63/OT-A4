import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-component',
  templateUrl: './admin-component.component.html',
  styleUrls: ['./admin-component.component.css']
})
export class AdminComponentComponent implements OnInit {

  applicants:FirebaseListObservable<any>;
  vacancies:FirebaseListObservable<any>;

  description;
  positionTitle;
  department;
  link;

  user: Observable<firebase.User>;


  constructor(db:AngularFireDatabase, private firebaseAuth: AngularFireAuth, public router: Router) {
    this.applicants = db.list('/applicants');
    this.vacancies = db.list('/vacancies');

    this.user = firebaseAuth.authState;
    this.router = router;

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


  goLogin(){
    //for some reason 'this' instance is lost... so declare it before doing things
    var _router = this.router;
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log('User is signed in.');

      } else {
        console.log('No user is signed in.');
        _router.navigate(['/signin']);
      }
    });
  }

  ngOnInit() {
  this.goLogin();

    }





}




