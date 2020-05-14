import {Pipe, PipeTransform} from '@angular/core';
@Pipe
({name : 'hyphenWithSlash'})
export class HyphenWithSlash implements PipeTransform {
  transform(input: string): string {
    input =  input.replace('-', '/');
    return input;
  }
}
