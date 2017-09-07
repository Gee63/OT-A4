import {Component, OnInit  } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@Component({
  selector: 'app-careers-component',
  templateUrl: './careers-component.component.html',
  styleUrls: ['./careers-component.component.css']
})
export class CareersComponentComponent implements OnInit  {

  //vacancies:FirebaseListObservable<any>;


  //modal setup
  jobTitle;
  jobDescription;
  jobDepartment;
  iconLink;
  term;

  /*object data*/
  vacancies = [ {
    "description" : `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
    unknown printer took a galley of type and scrambled it to make a type specimen book.
    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. `,
    "positionTitle" : "payments",
    "department" : "finance",
    "link" : "finance-icon"
    },
    {
      "description" : `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
    unknown printer took a galley of type and scrambled it to make a type specimen book.
    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. `,
      "positionTitle" : "communication administrator",
      "department" : "operations",
      "link" : "operations-icon"
    },
    {
      "description" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when a unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      "positionTitle" : "affiliate manager",
      "department" : "acquisition marketing",
      "link" : "acquisition-marketing-icon"
    },
    {
      "description" : `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
    unknown printer took a galley of type and scrambled it to make a type specimen book.
    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. `,
      "positionTitle" : "payments",
      "department" : "finance",
      "link" : "finance-icon"
    },
    {
      "description" : `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
    unknown printer took a galley of type and scrambled it to make a type specimen book.
    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. `,
      "positionTitle" : "communication administrator",
      "department" : "operations",
      "link" : "operations-icon"
    },
    {
      "description" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when a unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      "positionTitle" : "affiliate manager",
      "department" : "acquisition marketing",
      "link" : "acquisition-marketing-icon"
    },
    {
      "description" : `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
    unknown printer took a galley of type and scrambled it to make a type specimen book.
    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. `,
      "positionTitle" : "payments",
      "department" : "finance",
      "link" : "finance-icon"
    },
    {
      "description" : `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
    unknown printer took a galley of type and scrambled it to make a type specimen book.
    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. `,
      "positionTitle" : "communication administrator",
      "department" : "operations",
      "link" : "operations-icon"
    },
    {
      "description" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when a unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      "positionTitle" : "affiliate manager",
      "department" : "acquisition marketing",
      "link" : "acquisition-marketing-icon"
    },
    {
      "description" : `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
    unknown printer took a galley of type and scrambled it to make a type specimen book.
    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. `,
      "positionTitle" : "retention marketer",
      "department" : "retention marketing",
      "link" : "retention-marketing-icon"
    }
    ];
  constructor(db:AngularFireDatabase) {
    /*db code*/
    //uncooment thisssss    ---  this.vacancies = db.list('/vacancies');
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
