import { Pipe, PipeTransform } from '@angular/core';
import {FilterConfig} from '../models/mockDataTypes';

@Pipe({
  name: 'filterEntries',
  pure: false
})
export class FilterEntries implements PipeTransform {
  transform(items: any[], filter: FilterConfig): any {
    console.log(items)
    if (!items || !filter || !filter.prop) {
      return items;
    }

    const tmpArr = [];
    items.forEach(item => {
      if (item[filter.prop] === filter.value) {
        tmpArr.push(item);
      }
    });

    return tmpArr;
  }
}

