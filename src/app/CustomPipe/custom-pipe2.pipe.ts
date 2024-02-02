import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe2'
})
export class CustomPipe2Pipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let filterData = []
    let SearchText=args[0]
    
    SearchText = SearchText.toLowerCase()
 
    console.log(SearchText)

    filterData = value.filter((el:any) => el.productName.toLowerCase().includes(SearchText))

    return filterData;
  }

save(){}

}
