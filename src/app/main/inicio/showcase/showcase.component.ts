import { Component, OnInit } from '@angular/core';
import { MenuItens } from './menuItens';
import { PokemonService } from 'src/servicos/pokemon.service';
import { trigger, style, state, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss'],
  animations: [
    trigger('CardState', [
      transition(':enter',
      [
        style({
          opacity: 0,
          transform: 'scale(0)'
        }),
        animate('1s ease-out', style({
          opacity: 1,
          transform: 'scale(1)'
        })),
      ]),
    ])
  ]
})
export class ShowcaseComponent implements OnInit {
  menuItens = MenuItens.itens;
  pokemonsSearched = [];
  abaAtual = '';
  valorBusca = '';
  constructor(private pokemonService: PokemonService) { }

  escolherAba(indexAba: number) {
    const aba = this.menuItens[indexAba].nomeMenu.replace(' ', '');
    if (aba !== this.abaAtual) {
      this.menuItens = this.menuItens.map( item => {
        item.ativo = false;
        return item;
      });
      this.pokemonService
        .buscarPokemons(aba, 1)
        .then((pokemons: any) => {
          this.pokemonsSearched = pokemons;
        });
      this.menuItens[indexAba].ativo = true;
      this.abaAtual = aba;
    }
  }
  ngOnInit() {
    this.escolherAba(0);
  }

}
