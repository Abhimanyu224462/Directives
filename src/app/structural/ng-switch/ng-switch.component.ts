import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.scss']
})
export class NgSwitchComponent {

  daySelected:string = ""

  weekdays:string[] = ['Sunday','Monday','Tuesday','Wednesday','Thrusday','Friday','Saturday']

}
