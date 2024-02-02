import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe1',
  // pure:true
})
export class CustomPipe1Pipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
   const transformLower = value.toLocaleLowerCase()
    return transformLower;
    // console.log("pipe Executed")
    // return value
  }

}
