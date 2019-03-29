import { Pipe, PipeTransform } from '@angular/core';
import { option,reg,morse } from './morse';

@Pipe({
  name: 'xmorse'
})

export class XmorsePipe implements PipeTransform {
  
  transform(value: any, args?: any): any {
    if(value!==""){
      return reg.test(value)?morse.encode('' + value,option):'...(((m-__-)m...你输入的数据有毒...';
    }
  }

}


