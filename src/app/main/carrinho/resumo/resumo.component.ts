import { StorageService } from 'src/servicos/storage.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-resumo',
  templateUrl: './resumo.component.html',
  styleUrls: ['./resumo.component.scss']
})
export class ResumoComponent implements OnInit {

  @Output() retornar = new EventEmitter<boolean>();
  @Output() avancar = new EventEmitter<boolean>();
  @Input() cartao: any;
  carrinhoAtual: any;
  arrayDeItens = [];
  quantidadeItens = 0;
  constructor(private storageService: StorageService) { }

  ngOnInit(): void {
    this.carrinhoAtual = this.storageService.pegarCarrinhoAtual();
    for (const pokemon of this.carrinhoAtual.pokemon) {
      this.quantidadeItens += pokemon.quantidade;
      this.arrayDeItens.push(`${pokemon.quantidade} x ${pokemon.nome}`)
    }
  }

  finalizar() {
    this.storageService.registrarCompra(
      {
        pokemons: this.carrinhoAtual,
        cartao: this.cartao,
        valor: this.carrinhoAtual.valorTotal,
        quantidade: this.quantidadeItens,
        data: new Date()
      }
    );
    this.avancar.emit(true);
  }

}
