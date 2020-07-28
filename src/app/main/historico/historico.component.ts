import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { StorageService } from 'src/servicos/storage.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.scss']
})
export class HistoricoComponent implements OnInit, OnDestroy {
  compras = [];
  subscription: Subscription;
  @Output() closed = new EventEmitter<boolean>();
  constructor(private storageService: StorageService) { }

  ngOnInit(): void {
    this.subscription = this.storageService.atualizarComprasFeitas.subscribe(compras => {
      this.compras = compras;
    });
    this.storageService.carregarCompras();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
