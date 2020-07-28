import { Subscription } from 'rxjs';
import { StorageService } from 'src/servicos/storage.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lista-cartoes',
  templateUrl: './lista-cartoes.component.html',
  styleUrls: ['./lista-cartoes.component.scss']
})
export class ListaCartoesComponent implements OnInit {

  @Output() retornar = new EventEmitter<boolean>();
  @Output() avancar =  new EventEmitter<any>();
  addCartao = false;
  cartaoEscolhido: boolean;
  cartoesCadastrados = [];
  subscription: Subscription;
  constructor(private storageService: StorageService) { }

  ngOnInit(): void {
    this.subscription = this.storageService.atualizarCartoes.subscribe((cartoes: any) => {
      this.cartoesCadastrados = [];
      for (const cartao of cartoes) {
        if (cartao.ativo) {
          cartao.escolhido = false;
          this.cartoesCadastrados.push(cartao);
        }
      }
    });
    this.storageService.carregarCartoesAtuais();
  }

  aoAdicionarCartao() {
    this.cartoesCadastrados = this.cartoesCadastrados.map( cartao => {
      cartao.escolhido = false;
      return cartao;
    });
    this.cartaoEscolhido = false;
    this.addCartao = !this.addCartao;
  }

  escolherCartao(index: number) {
    if (this.cartoesCadastrados[index].escolhido) {
      this.cartoesCadastrados[index].escolhido = false;
      this.cartaoEscolhido = false;
    } else {
      this.cartoesCadastrados = this.cartoesCadastrados.map( cartao => {
        cartao.escolhido = false;
        return cartao;
      });
      this.cartoesCadastrados[index].escolhido = true;
      this.cartaoEscolhido = true;
    }
  }

  avancarCartao() {
    const cartao = this.cartoesCadastrados.find( cartaoAtual => cartaoAtual.ativo);
    this.avancar.emit(cartao);
  }

}
