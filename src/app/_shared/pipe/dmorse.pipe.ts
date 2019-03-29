import { Pipe, PipeTransform } from '@angular/core';
import { option,reg,morse } from './morse';

@Pipe({
  name: 'dmorse'
})
export class DmorsePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value!==""){
      var value=morse.decode(value);
      return value?value:'...(((m-__-)m...你输入的数据有毒...';
    }
  }

}
