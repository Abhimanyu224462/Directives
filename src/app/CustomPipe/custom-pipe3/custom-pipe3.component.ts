import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-pipe3',
  templateUrl: './custom-pipe3.component.html',
  styleUrls: ['./custom-pipe3.component.scss']
})
export class CustomPipe3Component {
  SearchText:string = ""

  productList:any = [
    {productName:"iPHONE",price:"45000",qty:1},
    {productName:"iPHONE12",price:"65000",qty:2},
    {productName:"one Plus",price:"85000",qty:1},
    {productName:"SUNGSUNG",price:"35000",qty:2},
    {productName:"lava",price:"15000",qty:1},
    {productName:"motalora",price:"85000",qty:4},
    {productName:"XIOMI",price:"25000",qty:3},
  ]
}
