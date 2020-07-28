import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtraAtivos',
  pure: false
})
export class FiltraAtivosPipe implements PipeTransform {

  transform(value: any[], ...args: unknown[]): unknown {
    if (value.length === 0) {
      return value;
    }
    const arrayValido = [];
    for (const cartao of value) {
      if (cartao.ativo === true) {
        arrayValido.push(cartao);
      }
    }
    return arrayValido;
  }

}
