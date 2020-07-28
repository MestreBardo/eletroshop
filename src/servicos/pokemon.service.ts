import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StorageService } from './storage.service';
import { take, map, skip, tap, switchMapTo } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  tiposBuscaMemoria = ['chocantes', 'novos'];
  constructor(private http: HttpClient, private storageService: StorageService) {
  }

  buscarPokemons(tipo: string, pagina?: number) {
    if (this.tiposBuscaMemoria.includes(tipo)) {
      return new Promise( (resolve, reject) => {
        const pokemons: [] = this.storageService.buscarStorage(tipo);
        resolve(pokemons);
      });
    } else {
      return this.http.get('https://pokeapi.co/api/v2/type/electric')
      .pipe(take(1), map( (x: any) => x.pokemon.map( pokemon =>
        { return {
          url: pokemon.pokemon.url, nome: pokemon.pokemon.name};
        })))
      .toPromise();

    }
  }

  buscarImagem(id: number) {
    return this.http.get(`https://pokeres.bastionbot.org/images/pokemon/${id}.png`, {responseType: 'blob'})
    .pipe(take(1)).toPromise();
  }

  buscarPokemonURL(url: string) {
    return this.http.get(url)
    .pipe(take(1), map( (x: any) => {
      return {
        id: x.id,
        nome: x.name,
        sprite: x.sprites.front_default,
        valor: x.base_experience * 2,
        imagemCarrinho: x.sprites.front_default,
        quantidade: 1,
        url
      };
    }))
    .toPromise();
  }

  getCharacteristic(id: any) {
    return this.http.get(`https://pokeapi.co/api/v2/characteristic/${id}/`)
    .pipe(take(1))
    .toPromise();
  }

  buscarPokemonURLFull(url: string) {
    return this.http.get(url)
    .pipe(take(1))
    .toPromise();
  }
}
