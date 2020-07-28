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
    const chocantes = DefinicoesIniciais.quentes;
    const novos = DefinicoesIniciais.doForno;
    const carrinhoAtual = DefinicoesIniciais.carrinhoInicial;
    const cartoesIniciais = DefinicoesIniciais.cartoesIniciais;
    localStorage.setItem('chocantes', JSON.stringify(chocantes));
    localStorage.setItem('novos', JSON.stringify(novos));
    if (!localStorage.getItem('carrinhoAtualEletro')) {
      localStorage.setItem('carrinhoAtualEletro', JSON.stringify(carrinhoAtual));
    }
    if (!localStorage.getItem('cartoesEletro')) {
      localStorage.setItem('cartoesEletro', JSON.stringify(cartoesIniciais));
    }
    if (!localStorage.getItem('comprasFeitasEletro')) {
      localStorage.setItem('comprasFeitasEletro', JSON.stringify([]));
    }
  }

  buscarStorage(valor: string) {
    return JSON.parse(localStorage.getItem(valor));
  }

  carregarCarrinhoAtual() {
    this.atualizarCarrinho.next(JSON.parse(localStorage.getItem('carrinhoAtualEletro')));
  }

  carregarCartoesAtuais() {
    this.atualizarCartoes.next(JSON.parse(localStorage.getItem('cartoesEletro')));
  }

  carregarCompras() {
    this.atualizarComprasFeitas.next(JSON.parse(localStorage.getItem('comprasFeitasEletro')));
  }

  atualizaPokemonCarrinho(pokemon: any) {
    const carrinhoAtual = JSON.parse(localStorage.getItem('carrinhoAtualEletro'));
    const findIndex = carrinhoAtual.pokemon.findIndex( pokemonAtual => pokemonAtual.id === pokemon.id);
    carrinhoAtual.valorTotal -= carrinhoAtual.pokemon[findIndex].valor;
    carrinhoAtual.valorTotal += pokemon.valor;
    carrinhoAtual.pokemon[findIndex] = pokemon;
    localStorage.setItem('carrinhoAtualEletro', JSON.stringify(carrinhoAtual));
    this.atualizarCarrinho.next(carrinhoAtual);

  }

  registrarCompra(compra: any) {
    const compras = JSON.parse(localStorage.getItem('comprasFeitasEletro'));
    compras.push(compra);
    localStorage.setItem('comprasFeitasEletro', JSON.stringify(compras));
  }

  deletaPokemonCarrinho(id: number) {
    const carrinhoAtual = JSON.parse(localStorage.getItem('carrinhoAtualEletro'));
    const findIndex = carrinhoAtual.pokemon.findIndex( pokemonAtual => pokemonAtual.id === id);
    carrinhoAtual.valorTotal -= carrinhoAtual.pokemon[findIndex].valor;
    carrinhoAtual.pokemon.splice(findIndex, 1);
    localStorage.setItem('carrinhoAtualEletro', JSON.stringify(carrinhoAtual));
    this.atualizarCarrinho.next(carrinhoAtual);
  }

  cancelarCartao(cartao: any) {
    const cartoes = JSON.parse(localStorage.getItem('cartoesEletro'));
    const findIndex = cartoes.findIndex( cartaoAual => cartaoAual.id === cartao.id);
    cartoes[findIndex] = cartao;
    localStorage.setItem('cartoesEletro', JSON.stringify(cartoes));
    this.atualizarCartoes.next(cartoes);
  }

  resetCarrinho() {
    localStorage.setItem('carrinhoAtualEletro', JSON.stringify(DefinicoesIniciais.carrinhoInicial));
    this.atualizarCarrinho.next(DefinicoesIniciais.carrinhoInicial);
    this.carregarCompras();
  }

  adicionarCartao(cartao: any) {
    const cartoes = JSON.parse(localStorage.getItem('cartoesEletro'));
    cartao.id = cartoes.length + 1;
    cartoes.push(cartao);
    localStorage.setItem('cartoesEletro', JSON.stringify(cartoes));
    this.atualizarCartoes.next(cartoes);
  }

  pegarCarrinhoAtual() {
    return JSON.parse(localStorage.getItem('carrinhoAtualEletro'));
  }

  adicionarCarrinho(pokemon: any) {
    const carrinhoAtual = JSON.parse(localStorage.getItem('carrinhoAtualEletro'));
    const findIndex = carrinhoAtual.pokemon.findIndex( pokemonAtual => pokemonAtual.id === pokemon.id);
    if (findIndex === -1) {
      carrinhoAtual.pokemon.push(pokemon);
    } else {
      carrinhoAtual.pokemon[findIndex].quantidade += 1;
      carrinhoAtual.pokemon[findIndex].valor += pokemon.valor;
    }
    carrinhoAtual.quantidade += 1;
    carrinhoAtual.valorTotal += pokemon.valor;
    localStorage.setItem('carrinhoAtualEletro', JSON.stringify(carrinhoAtual));
    this.atualizarCarrinho.next(carrinhoAtual);
  }
}
