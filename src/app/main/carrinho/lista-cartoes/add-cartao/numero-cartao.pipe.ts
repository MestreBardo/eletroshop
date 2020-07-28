import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numeroCartao'
})
export class NumeroCartaoPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    value = value.replace(/[^\d]/g, '');
    if (value.length <= 4) {
      return value;
    }
    if (value.length > 4 && value.length <= 8) {
      return `${value.substring(0, 4)} ${value.substring(4)}`;
    }
    if (value.length > 8 && value.length <= 12) {
      return `${value.substring(0, 4)} ${value.substring(4, 8)} ${value.substring(8)}`;
    }
    if (value.length > 12 && value.length <= 16) {
      return `${value.substring(0, 4)} ${value.substring(4, 8)} ${value.substring(8, 12)} ${value.substring(12)}`;
    }
  }

}
