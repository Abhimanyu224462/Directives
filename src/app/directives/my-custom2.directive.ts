import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMyCustom2]'
})
export class MyCustom2Directive {

  constructor(private el:ElementRef, private ren:Renderer2) { }


  ngOnInit(){
    const h1 = this.ren.createElement('h1')
    const text = this.ren.createText("My Own Custom Directive")
    this.ren.appendChild(h1,text)
    this.ren.appendChild(this.el.nativeElement,h1)
  }
}
