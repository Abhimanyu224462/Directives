import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss']
})
export class NgForComponent {

  Group6:string[] = ['Juber','Mujjo','Rakesh','Suphie','Abhi']

names:string = ""
  
  members1:string=""

  show(){
    // this.names = this.members1
    console.log("value is", this.names)
  }

  productList:any = [
    {productName:"iPhone",price:"45000",qty:1},
    {productName:"samsung",price:"35000",qty:2},
    {productName:"lava",price:"15000",qty:1},
    {productName:"motolora",price:"85000",qty:4},
    {productName:"Xiomi",price:"25000",qty:3},
  ]

  
}
