/**
 * Created by Russell on 3/19/2018.
 */
import { PipeTransform, Pipe } from '@angular/core';

@Pipe({name: 'jsontoarray'})
export class JsonToArray implements PipeTransform {
  transform(value, args: string[]): any {
    let keys = [];

    for (let key in value) {
      keys.push(key);
    }
    return keys;
  }
}
