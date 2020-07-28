import { Component, OnInit, Directive, OnDestroy } from '@angular/core';
import { StorageService } from 'src/servicos/storage.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit, OnDestroy {
  valorCarrinho = 0;
  subscription: any;
  subscriptionCompras: any;
  numeroCompras = 0;
  open = false;
  tipo = 'carrinho';
  constructor(private storageService: StorageService) { }

  ngOnInit() {
    this.subscription = this.storageService.atualizarCarrinho.subscribe(carrinhoAtualizado => {
      this.valorCarrinho = carrinhoAtualizado.valorTotal;
    });
    this.subscriptionCompras = this.storageService.atualizarComprasFeitas.subscribe(compras => {
      this.numeroCompras = compras.length;
    });
    this.storageService.carregarCarrinhoAtual();
    this.storageService.carregarCompras();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  abrirLateral(lateral: string) {
    this.tipo = lateral;
    this.open = !this.open;
  }

}
