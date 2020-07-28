import { Subscription } from 'rxjs';
import { StorageService } from './../../../../servicos/storage.service';
import { Component, OnInit, Input, OnDestroy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lista-carrinho',
  templateUrl: './lista-carrinho.component.html',
  styleUrls: ['./lista-carrinho.component.scss']
})
export class ListaCarrinhoComponent implements OnInit {
  @Input() pokemonsCarrinho: any[];
  @Input() valorCarrinho: any;
  @Output() fechar = new EventEmitter<boolean>();
  @Output() avancar = new EventEmitter<boolean>();
  constructor(private storageService: StorageService) { }

  ngOnInit() {

  }


}
