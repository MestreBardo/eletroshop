import { Component, OnInit, Input } from '@angular/core';
import { StorageService } from 'src/servicos/storage.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() pokemon: any;
  valorIndividual: number;
  quantidadeAtual: number;
  constructor(private storageService: StorageService) { }

  ngOnInit() {
    this.valorIndividual = this.pokemon.valor / this.pokemon.quantidade;
    this.quantidadeAtual = this.pokemon.quantidade;
  }

  mudarQuantidade(event: any) {
    const valorExtraido = event.target.value;
    const valorATrabalhar = valorExtraido === '' || +valorExtraido < 0 ? 0 : +valorExtraido;
    if (valorATrabalhar < this.pokemon.quantidade) {
      this.pokemon.valor -= this.valorIndividual * (this.pokemon.quantidade - valorATrabalhar);
    } else {
      this.pokemon.valor += this.valorIndividual * (valorATrabalhar - this.pokemon.quantidade);
    }
    this.pokemon.quantidade = valorATrabalhar;
    this.quantidadeAtual = valorATrabalhar;
    this.atualizaPokemon();
  }

  verificaMudanca(event: any) {
    const valorExtraido = event.target.value;
    const valorATrabalhar = valorExtraido === '' || +valorExtraido < 0 ? 0 : +valorExtraido;
    if (valorATrabalhar === 0) {
      this.storageService.deletaPokemonCarrinho(this.pokemon.id);
    }
  }

  mudaQuantidade(tipo: string) {

    switch (tipo) {
      case 'negativo':
        this.pokemon.valor -= this.valorIndividual;
        this.pokemon.quantidade -= 1;
        break;
      case 'positivo':
        this.pokemon.valor += this.valorIndividual;
        this.pokemon.quantidade += 1;
        break;
    }
    this.quantidadeAtual = this.pokemon.quantidade;
    this.atualizaPokemon();
  }

  private atualizaPokemon() {
    this.storageService.atualizaPokemonCarrinho(this.pokemon);
  }

  deletaPokemon() {
    this.storageService.deletaPokemonCarrinho(this.pokemon.id);
  }

}
