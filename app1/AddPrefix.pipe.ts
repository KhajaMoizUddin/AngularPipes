import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
name: 'addPrefixWithDR'
})
export class AddPrefixWithDr implements PipeTransform {
  transform(inputString: string): string {
   return  'Dr. ' + inputString;
  }
}


