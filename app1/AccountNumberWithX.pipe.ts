import {Pipe, PipeTransform} from '@angular/core';
@Pipe({name: 'AccountNumberWithX'})
export class AccountNymberWithCross implements PipeTransform {
   transform(inputValue: string): string {
   inputValue = 'XXXXX' + inputValue.slice(26, 28 );
   return inputValue;
  }
}
