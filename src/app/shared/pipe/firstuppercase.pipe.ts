import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstuppercase'
})
export class FirstuppercasePipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return value; // Handle null or undefined values
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

}
