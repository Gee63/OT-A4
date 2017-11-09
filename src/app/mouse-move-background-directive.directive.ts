import { Directive, HostListener, Output, EventEmitter} from '@angular/core';

@Directive({
  selector: '[appMouseMoveBackgroundDirective]'
})
export class MouseMoveBackgroundDirectiveDirective {

  /*output the mouse movements - attach this directive to the element you want the background to move for*/
  @Output() mouseMoveX:EventEmitter<any> = new EventEmitter<any>();
  @Output() mouseMoveY:EventEmitter<any> = new EventEmitter<any>();

  constructor() {

  }

@HostListener('mousemove', ['$event'])

onMousemove(e: MouseEvent){
  const windowWidth = window.innerWidth / 40;
  const windowHeight = window.innerHeight / 40 ;

  const mouseX = e.clientX / windowWidth;
  const mouseY = e.clientY / windowHeight;

  this.mouseMoveX.emit(mouseX);
  this.mouseMoveY.emit(mouseY);



  //bg.style.transform = 'translate3d(-'+ mouseX + '%, -' + mouseY + '%, 0);';

  /*console.log('this.mouseX',  mouseX);
  console.log('this.mouseY',  mouseY);*/
}

  @HostListener("window:devicemotion", ['$event'])
  OnDeviceMotion(e){
    console.log(e);
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const mouseX = e.acceleration.x * windowWidth;
    const mouseY = e.acceleration.y * windowHeight;

    //const mouseX = 0.01 * windowWidth;
    //const mouseY = 0.01 * windowHeight;

    this.mouseMoveX.emit(mouseX);
    this.mouseMoveY.emit(mouseY);

  }
  
}


