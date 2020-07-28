import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ajustaValores'
})
export class AjustaValoresPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): string {
    value = value.toString();
    if (value.length === 0) {
      return value;
    }
    if (value.length === 1) {
      return `0.${value}`;
    }

    return `${value.substring(0, value.length - 1)}.${value[value.length - 1]}`;
  }

}
