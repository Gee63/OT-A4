import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { AuthServiceService } from '../auth-service.service';
import * as firebase from 'firebase/app';
import * as Materialize from 'angular2-materialize';


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

  /*declare toast because webstorm doesnt know where it comes from (materialize)... i just dont like the red error lines*/
  toast;


  constructor(db:AngularFireDatabase, private authService: AuthServiceService) {
    this.applicants = db.list('/applicants');
    this.vacancies = db.list('/vacancies');
  }


  addVacancy(){
    /*set values*/
    this.description = (<HTMLInputElement>document.getElementById('description')).value;
    this.positionTitle = (<HTMLInputElement>document.getElementById('position')).value;
    this.department = (<HTMLInputElement>document.getElementById('department')).value;

    this.link = this.department + '-icon';

    var newVacancy =  {'description' : this.description, 'positionTitle' : this.positionTitle, 'department' : this.department, 'link' : this.link};

    if(this.description === '' || this.positionTitle === ''){
      console.log('enter values');
      (<HTMLElement>document.getElementById('addVacancyError')).classList.add('show');
    }
    else{
      /*push values to db*/
      firebase.database().ref('vacancies/').push(newVacancy, function(error) {
        if (error){
          console.log('Error has occurred during saving process');
          Materialize.toast('Error has occurred during saving process', 4000, 'red')
        }
        else{
          console.log("Data has been saved successfully");
          Materialize.toast('Data has been saved successfully', 4000, 'green');
          (<HTMLElement>document.getElementById('addVacancyError')).classList.remove('show');
        }
      })
    }


  }

  deleteVacancy(key){
console.log('key: ' + key);

    var deleteVacancy = {'description' : null, 'positionTitle' : null, 'department' : null, 'link' : null};

    firebase.database().ref('vacancies/' + key).update(deleteVacancy, function(error) {
        if (error){
          console.log('Error has occurred during deleting process');
          Materialize.toast('Error has occurred during deleting process', 4000, 'red')
        }

        else{
          console.log("Data has been deleted successfully");
          Materialize.toast('Data has been deleted successfully', 4000, 'green')
        }

      }
    );
  }

  logout(){
    this.authService.logout();
  }

  ngOnInit() {
  this.authService.checkLogin();
    }

}




