import { Component } from '@angular/core';
import { CustomPipe2Pipe } from '../custom-pipe2.pipe';

@Component({
  selector: 'app-custom-pipe2',
  templateUrl: './custom-pipe2.component.html',
  styleUrls: ['./custom-pipe2.component.scss']
})
export class CustomPipe2Component {

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
  noDataFound!: any;
  

constructor(private searchPipe:CustomPipe2Pipe){}

  testPipe(){
    const Data = this.searchPipe.transform(this.productList,this.SearchText)

    if(Data && Data.length == 0){
      this.noDataFound = true
    } else {
      this.noDataFound = false
    }
  }

}
