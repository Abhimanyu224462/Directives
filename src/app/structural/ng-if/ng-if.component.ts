import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.scss']
})
export class NgIFComponent {
  isShow:boolean = !true

  isDisplay:boolean = true

  toggle(){
    this.isDisplay = !this.isDisplay
  }

  contactPrefrence:string = "mobile"
  contactPrefrence1:string = "mobile1"
  contactPrefrence2:string = "mobile2"

}
