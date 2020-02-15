import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appResaltar]'
})
export class HiglightDirective {

  constructor(private elementoDom: ElementRef) {   
    elementoDom.nativeElement.style.backgroundColor = 'red';
  }

  @HostListener('mouseenter')
  ratonClick(): void {
    console.log('mouseEnter test');
    this.elementoDom.nativeElement.style.backgroundColor = 'yellow';
  }

}
