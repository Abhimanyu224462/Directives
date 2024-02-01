import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.scss']
})
export class NgClassComponent {
  productList:any = [
    {productName:"iPhone",price:"45000",qty:1},
    {productName:"samsung",price:"35000",qty:2},
    {productName:"lava",price:"15000",qty:1},
    {productName:"motolora",price:"85000",qty:4},
    {productName:"Xiomi",price:"25000",qty:3},
  ]

}
