import { Directive, HostListener, Input  } from '@angular/core';

@Directive({
  selector: '[appDepartmentsDirective]'
})

export class DepartmentsDirectiveDirective {

  @Input() departmentName:string;

  constructor() { }

  @HostListener('click') click() {
    console.log('department name: ' + this.departmentName);
    if((<HTMLInputElement>document.getElementById('filter-careers'))){
      (<HTMLInputElement>document.getElementById('filter-careers')).value = this.departmentName;
    }
    else{
      console.log('do something else');
    }

  }

}
