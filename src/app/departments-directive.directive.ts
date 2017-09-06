import { Directive, HostListener, Input  } from '@angular/core';

@Directive({
  selector: '[appDepartmentsDirective]'
})

export class DepartmentsDirectiveDirective {

  @Input() departmentName:string;
  @Input() departmentDesc:string;


  constructor() {
  }


  @HostListener('click') click() {
    console.log('department name: ' + this.departmentName);
    console.log('department desc: ' + this.departmentDesc);
    if((<HTMLInputElement>document.getElementById('filter-careers'))){
      (<HTMLInputElement>document.getElementById('filter-careers')).value = this.departmentName;
    }
    else{
      console.log('do something else');
      (<HTMLInputElement>document.getElementById('text')).innerText = this.departmentDesc;
    }

  }

}











