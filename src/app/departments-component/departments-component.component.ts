import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-departments-component',
  templateUrl: './departments-component.component.html',
  styleUrls: ['./departments-component.component.css']
})
export class DepartmentsComponentComponent implements OnInit {

  /*object data*/
  departments = [{
    "link": "finance-icon",
    "name": "finance",
    "nameShort": "finance",
    "description": "bla bla bla",
  }, {
    "link": "information-technology-icon",
    "name": "information technology",
    "nameShort": "tech",
    "description": "bla bla bla",
  },{
    "link": "human-resources-icon",
    "name": "human resources",
    "nameShort": "hr",
    "description": "bla bla bla",
  },{
    "link": "sports-icon",
    "name": "sports",
    "nameShort": "sports",
    "description": "bla bla bla",
  },{
    "link": "operations-icon",
    "name": "operations",
    "nameShort": "operations",
    "description": "bloo bloo bloo",
  }, {
    "link": "acquisition-icon",
    "name": "acquisition marketing",
    "nameShort": "acquisition",
    "description": "ble ble ble",
  }, {
    "link": "retention-icon",
    "name": "retention marketing",
    "nameShort": "retention",
    "description": "bly bly bly",
  }];


  page:string;

  constructor(private router:Router) {
    console.log(this.router.url);

    if (this.router.url === "/whatwedo") {
      console.log('whatwedo');
      this.page = "whatwedo";

    }
    else if (this.router.url === "/careers") {
      console.log('careers');
      this.page = "careers";
    }
  }

  /*output the dpt name*/
  @Output() filterTermUpdate:EventEmitter<string> = new EventEmitter<string>();

  onClick(departmentName) {
    this.filterTermUpdate.emit(departmentName);
  }

  ngOnInit() {

  }

}
