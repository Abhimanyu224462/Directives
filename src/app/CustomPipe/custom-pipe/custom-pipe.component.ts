import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styleUrls: ['./custom-pipe.component.scss']
})
export class CustomPipeComponent {
  productList:any = [
    {productName:"iPHONE",price:"45000",qty:1},
    {productName:"SUNGSUNG",price:"35000",qty:2},
    {productName:"lava",price:"15000",qty:1},
    {productName:"motalora",price:"85000",qty:4},
    {productName:"XIOMI",price:"25000",qty:3},
  ]


 
}
