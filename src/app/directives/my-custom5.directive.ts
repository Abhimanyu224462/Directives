import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMyCustom5]'
})
export class MyCustom5Directive {

  constructor(private el:ElementRef, private ren:Renderer2) { }

  @HostListener('input',["$event.target.value"])

  CapitalizeText(value:any){
    
    // console.log("Value getting:",value)

    const val = value.toUpperCase()
    
    // console.log("upper case value",val)

    this.ren.setProperty(this.el.nativeElement,'value',val)
  }
}
