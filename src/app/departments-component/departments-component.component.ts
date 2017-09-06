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
    "description": "bla bla bla",
  }, {
    "link": "operations-icon",
    "name": "operations",
    "description": "bloo bloo bloo",
  }, {
    "link": "acquisition-marketing-icon",
    "name": "acquisition marketing",
    "description": "ble ble ble",
  }, {
    "link": "retention-marketing-icon",
    "name": "retention marketing",
    "description": "bly bly bly",
  }];


  backgroundColor:string;

  constructor(private router:Router) {
    console.log(this.router.url);

    if (this.router.url === "/whatwedo") {
      console.log('blue');
      this.backgroundColor = "OsirisBlue";
    }
    else if (this.router.url === "/careers") {
      console.log('white');
      this.backgroundColor = "white";
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
