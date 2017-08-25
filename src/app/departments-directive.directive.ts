import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDepartmentsDirective]'
})
export class DepartmentsDirectiveDirective {

  @Input() departmentName:string;

  constructor() { }



  @HostListener('click') click() {
    console.log('department name: ' + this.departmentName);
    if((<HTMLInputElement>document.getElementById('filter-careers'))){
      console.log('do something');

      var keyEvent = new KeyboardEvent("keydown", {key : "a", code : 'a'});

      (<HTMLInputElement>document.getElementById('filter-careers')).value = this.departmentName;

      (<HTMLInputElement>document.getElementById('filter-careers')).focus();


      setTimeout(function(){
        (<HTMLInputElement>document.getElementById('filter-careers')).dispatchEvent(keyEvent);
        console.log(keyEvent);
      },1000);

    }
    else{
      console.log('do something else');
    }

  }

}
