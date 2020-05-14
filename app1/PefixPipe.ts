import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
name: 'prefixPipe'
})


export class PrefixPipe implements PipeTransform {
  transform(inputString: string): string {
   return  'Dr. ' + inputString.charAt(0).toUpperCase();
  }
}
