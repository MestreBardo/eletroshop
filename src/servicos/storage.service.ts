import { Injectable } from '@angular/core';
import { DefinicoesIniciais } from 'src/app/DefinicoesIniciais';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() { }
  atualizarCarrinho = new Subject<any>();
  atualizarCartoes = new Subject<any>();
  atualizarComprasFeitas = new Subject<any>();
  initStorage() {
    const quentes = DefinicoesIniciais.quentes;
    const doForno = DefinicoesIniciais.doForno;
    const carrinhoAtual = DefinicoesIniciais.carrinhoInicial;
    const cartoesIniciais = DefinicoesIniciais.cartoesIniciais;
    localStorage.setItem('quentes', JSON.stringify(quentes));
    localStorage.setItem('doForno', JSON.stringify(doForno));
    if (!localStorage.getItem('carrinhoAtual')) {
      localStorage.setItem('carrinhoAtual', JSON.stringify(carrinhoAtual));
    }
    if (!localStorage.getItem('cartoes')) {
      localStorage.setItem('cartoes', JSON.stringify(cartoesIniciais));
    }
    if (!localStorage.getItem('comprasFeitas')) {
      localStorage.setItem('comprasFeitas', JSON.stringify([]));
    }
  }

  buscarStorage(valor: string) {
    return JSON.parse(localStorage.getItem(valor));
  }

  carregarCarrinhoAtual() {
    this.atualizarCarrinho.next(JSON.parse(localStorage.getItem('carrinhoAtual')));
  }

  carregarCartoesAtuais() {
    this.atualizarCartoes.next(JSON.parse(localStorage.getItem('cartoes')));
  }

  carregarCompras() {
    this.atualizarComprasFeitas.next(JSON.parse(localStorage.getItem('comprasFeitas')));
  }

  atualizaPokemonCarrinho(pokemon: any) {
    const carrinhoAtual = JSON.parse(localStorage.getItem('carrinhoAtual'));
    const findIndex = carrinhoAtual.pokemon.findIndex( pokemonAtual => pokemonAtual.id === pokemon.id);
    carrinhoAtual.valorTotal -= carrinhoAtual.pokemon[findIndex].valor;
    carrinhoAtual.valorTotal += pokemon.valor;
    carrinhoAtual.pokemon[findIndex] = pokemon;
    localStorage.setItem('carrinhoAtual', JSON.stringify(carrinhoAtual));
    this.atualizarCarrinho.next(carrinhoAtual);

  }

  registrarCompra(compra: any) {
    const compras = JSON.parse(localStorage.getItem('comprasFeitas'));
    compras.push(compra);
    localStorage.setItem('comprasFeitas', JSON.stringify(compras));
  }

  deletaPokemonCarrinho(id: number) {
    const carrinhoAtual = JSON.parse(localStorage.getItem('carrinhoAtual'));
    const findIndex = carrinhoAtual.pokemon.findIndex( pokemonAtual => pokemonAtual.id === id);
    carrinhoAtual.valorTotal -= carrinhoAtual.pokemon[findIndex].valor;
    carrinhoAtual.pokemon.splice(findIndex, 1);
    localStorage.setItem('carrinhoAtual', JSON.stringify(carrinhoAtual));
    this.atualizarCarrinho.next(carrinhoAtual);
  }

  cancelarCartao(cartao: any) {
    const cartoes = JSON.parse(localStorage.getItem('cartoes'));
    const findIndex = cartoes.findIndex( cartaoAual => cartaoAual.id === cartao.id);
    cartoes[findIndex] = cartao;
    localStorage.setItem('cartoes', JSON.stringify(cartoes));
    this.atualizarCartoes.next(cartoes);
  }

  resetCarrinho() {
    localStorage.setItem('carrinhoAtual', JSON.stringify(DefinicoesIniciais.carrinhoInicial));
    this.atualizarCarrinho.next(DefinicoesIniciais.carrinhoInicial);
    this.carregarCompras();
  }

  adicionarCartao(cartao: any) {
    const cartoes = JSON.parse(localStorage.getItem('cartoes'));
    cartao.id = cartoes.length + 1;
    cartoes.push(cartao);
    localStorage.setItem('cartoes', JSON.stringify(cartoes));
    this.atualizarCartoes.next(cartoes);
  }

  pegarCarrinhoAtual() {
    return JSON.parse(localStorage.getItem('carrinhoAtual'));
  }

  adicionarCarrinho(pokemon: any) {
    const carrinhoAtual = JSON.parse(localStorage.getItem('carrinhoAtual'));
    const findIndex = carrinhoAtual.pokemon.findIndex( pokemonAtual => pokemonAtual.id === pokemon.id);
    if (findIndex === -1) {
      carrinhoAtual.pokemon.push(pokemon);
    } else {
      carrinhoAtual.pokemon[findIndex].quantidade += 1;
      carrinhoAtual.pokemon[findIndex].valor += pokemon.valor;
    }
    carrinhoAtual.quantidade += 1;
    carrinhoAtual.valorTotal += pokemon.valor;
    localStorage.setItem('carrinhoAtual', JSON.stringify(carrinhoAtual));
    this.atualizarCarrinho.next(carrinhoAtual);
  }
}
