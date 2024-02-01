import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMyCustom]'
})
export class MyCustomDirective {

  

  @Input('appMyCustom') condition!:boolean

  constructor(private el:ElementRef, private ren:Renderer2) { }

  ngOnInit(){
    if(this.condition){
      this.ren.addClass(this.el.nativeElement,'bg')
    } else {
      this.ren.addClass(this.el.nativeElement,'bg-one')
    }
    console.log("Directive executed", this.condition)

    // const h3 = this.ren.createElement('h3')
    // const text = this.ren.createText("My Own Custom Directive")
    // this.ren.appendChild(h3,text)
    // this.ren.appendChild(this.el.nativeElement,h3)
  }
}
