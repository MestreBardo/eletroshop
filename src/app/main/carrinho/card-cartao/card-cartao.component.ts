import { StorageService } from 'src/servicos/storage.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-cartao',
  templateUrl: './card-cartao.component.html',
  styleUrls: ['./card-cartao.component.scss']
})
export class CardCartaoComponent implements OnInit {

  constructor(private storageService: StorageService) { }
  @Input() cartao: any;
  ngOnInit(): void {
  }

  deletarCartao() {
    this.cartao.ativo = false;
    this.storageService.cancelarCartao(this.cartao);
  }

}
