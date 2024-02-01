import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMyCustom3]'
})
export class MyCustom3Directive {

  constructor(private el:ElementRef, private ren:Renderer2) { }

  @HostListener('mouseover')

  onMouseOver(){ 
    this.ren.addClass(this.el.nativeElement,'bg-two')
  }

  @HostListener('mouseout')

  onMouseOut(){
    this.ren.removeClass(this.el.nativeElement,'bg-two')
  }


}
