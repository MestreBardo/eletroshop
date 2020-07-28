import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonFilter'
})
export class PokemonFilterPipe implements PipeTransform {

  transform(value: any[], filterString: string, filterField: string): any[] {
    if (value.length === 0 || filterString === '') {
      return value;
    }
    const arrayReturn = [];
    for (const item of value) {
      if ( item[filterField].includes(filterString.toLowerCase())) {
        arrayReturn.push(item);
      }
    }
    return arrayReturn;
  }

}
