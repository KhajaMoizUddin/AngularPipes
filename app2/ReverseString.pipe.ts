import {Pipe, PipeTransform } from '@angular/core';

@
Pipe
({name: 'reverseString'})
export class ReverseString implements PipeTransform {
  transform(inputValue: string): string {
    let newValue = '';
    for (let i = inputValue.length - 1; i >= 0; i--) {
newValue = newValue + inputValue[i];
    }
    return newValue;
  }
}
