import { Component, OnInit, Input } from '@angular/core';
import { PokemonService } from 'src/servicos/pokemon.service';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { StorageService } from 'src/servicos/storage.service';

@Component({
  selector: 'app-modal-pokemon',
  templateUrl: './modal-pokemon.component.html',
  styleUrls: ['./modal-pokemon.component.scss']
})
export class ModalPokemonComponent implements OnInit {
  @Input() url: string;
  constructor(private pokemonService: PokemonService,
              public bsModalRef: BsModalRef, private storageService: StorageService) { }
  pokemon: any;
  imageUrl = '';

  ngOnInit(): void {
    this.pokemonService
      .buscarPokemonURLFull(this.url)
      .then((pokemon: any) => {
        this.pokemon = pokemon;
        setTimeout(() => {
          this.imageUrl = `https://pokeres.bastionbot.org/images/pokemon/${this.pokemon.id}.png`;
        }, 1000);
      });

  }

  adicionarAoCarrinho() {

    this.storageService
      .adicionarCarrinho({
        id: this.pokemon.id,
        nome: this.pokemon.name,
        valor: this.pokemon.base_experience * 2,
        url: this.pokemon.url,
        imagemCarrinho: this.pokemon.sprites.front_default,
        quantidade: 1
      });
  }

}
