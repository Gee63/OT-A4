import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-departments-component',
  templateUrl: './departments-component.component.html',
  styleUrls: ['./departments-component.component.css']
})
export class DepartmentsComponentComponent implements OnInit {

  /*object data*/
  departments = [ {
    "link" : "finance-icon",
    "name" : "finance"
  }, {
    "link" : "operations-icon",
    "name" : "operations"
  }, {
    "link" : "acquisition-marketing-icon",
    "name" : "acquisition marketing"
  }, {
    "link" : "retention-marketing-icon",
    "name" : "retention marketing"
  } ];

  constructor(private router: Router) {
    console.log(this.router.url);
  }

/*output the dpt name so parent element can*/
  @Output() filterTermUpdate: EventEmitter<string> = new EventEmitter<string>();

  onClick(departmentName) {
    console.log('filterTerm: ' + departmentName);
    this.filterTermUpdate.emit(departmentName);
  }

  ngOnInit() {
  }

}
