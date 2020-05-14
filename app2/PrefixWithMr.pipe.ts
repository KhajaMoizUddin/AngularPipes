import {Pipe, PipeTransform} from '@angular/core';
@Pipe
({name : 'prefixWithMr'})
export class PrefixWithMr implements PipeTransform {
  transform(input: string): string {
    input = 'Mr. ' + input;
    return input;
  }
}
