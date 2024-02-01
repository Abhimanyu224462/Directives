import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMyCustom4]'
})
export class MyCustom4Directive {

  constructor(private el:ElementRef, private ren:Renderer2) { }

  // @HostListener('click')

  // onClick(){
  //   this.ren.addClass(this.el.nativeElement,'bg-two')
  // }
  @HostBinding('innerText') text:string = "hath laga ke dikha"

  @HostListener('click')

  onClick(){
    this.ren.addClass(this.el.nativeElement,'bg-two')
    this.text = "haan laga dia ab bol"
  }

  @HostListener('mouseout')

  onMouseOut(){
    this.ren.addClass(this.el.nativeElement,'bg-four')
    this.text = "mala raag yetoye"
  }
}
