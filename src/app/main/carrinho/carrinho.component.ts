import { ModalCompraTerminadaComponent } from './../../shared/modal-compra-terminada/modal-compra-terminada.component';
import { BsModalService } from 'ngx-bootstrap/modal';

import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { StorageService } from 'src/servicos/storage.service';
import { Subscription } from 'rxjs';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss'],
  animations: [
    trigger('formState', [
      transition(':enter',
      [
        style({
          opacity: 0,
          transform: 'translateX(-150px)'
        }),
        animate('1s ease-out', style({
          opacity: 1,
          transform: 'translateX(0)'
        })),
      ]),
    ])
  ]
})
export class CarrinhoComponent implements OnInit, OnDestroy {

  @Output() closed: EventEmitter<boolean> = new EventEmitter();
  pokemonsCarrinho = [];
  valorCarrinho = 0;
  estado = 'carrinho';
  estadoIndex = 0;
  estados = ['carrinho', 'cartoes', 'resumo'];
  cartaoAUtilizar: any;
  subscription: Subscription;

  constructor(private storageService: StorageService, private modalService: BsModalService) { }

  ngOnInit() {
    this.subscription = this.storageService.atualizarCarrinho
      .subscribe((carrinhoAtual: any) => {
        this.pokemonsCarrinho = carrinhoAtual.pokemon;
        this.valorCarrinho = carrinhoAtual.valorTotal;
      });
    this.storageService.carregarCarrinhoAtual();
  }
  avancaEtapa(cartao?: any) {
    this.estadoIndex += 1;
    this.estado = this.estados[this.estadoIndex];
    if (cartao) {
      this.cartaoAUtilizar = cartao;
    }
  }

  finalizarCompra() {
    this.storageService
      .resetCarrinho();
    this.estado = 'carrinho';
    this.estadoIndex = 0;
    this.closed.emit(true);
    this.modalService.show(ModalCompraTerminadaComponent, {class: 'second-modal-backdrop modal-width-400'});
  }

  retornarEtapa() {
    if (this.estado === 'carrinho') {
      this.closed.emit(true);
    } else {
      this.estadoIndex -= 1;
      this.estado = this.estados[this.estadoIndex];
    }
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
