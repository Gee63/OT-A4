import { Directive, HostListener, Input  } from '@angular/core';

@Directive({
  selector: '[appDepartmentsDirective]'
})

export class DepartmentsDirectiveDirective {

  @Input() departmentNameShort:string;
  @Input() departmentDesc:string;


  constructor() {

  }

  @HostListener('click') click() {
    if((<HTMLInputElement>document.getElementById('filter-careers'))){
      (<HTMLInputElement>document.getElementById('filter-careers')).value = this.departmentNameShort;
    }
    else{
      (<HTMLInputElement>document.getElementById('text')).innerText = this.departmentDesc;
    }

  }

}











