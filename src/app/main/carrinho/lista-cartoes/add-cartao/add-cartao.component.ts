import { StorageService } from './../../../../../servicos/storage.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-cartao',
  templateUrl: './add-cartao.component.html',
  styleUrls: ['./add-cartao.component.scss']
})
export class AddCartaoComponent implements OnInit {

  constructor(private fb: FormBuilder, private storageService: StorageService) { }
  @Output() fechar = new EventEmitter<boolean>();
  numeroCartao = '';
  nomeCartao = '';
  bandeira = '';

  ngOnInit(): void {
  }

  ajustarCartao(event: any) {
    this.numeroCartao = this.numeroCartao.replace(/[A-Za-z!@#$%&. ]/g, '').substring(0, 16);
    event.target.value = this.numeroCartao;
  }

  ajustarNome(event: any) {
    this.nomeCartao = this.nomeCartao.replace(/[0-9!@#$%&.]/g, '');
    event.target.value = this.nomeCartao;
  }

  fecharAddCartao() {
    this.numeroCartao = '';
    this.nomeCartao = '';
    this.bandeira = '';
    this.fechar.emit();
  }

  verificarAceite() {
    if (this.nomeCartao === '' || this.nomeCartao.length < 4) {
      return true;
    }
    if (this.numeroCartao.length < 16) {
      return true;
    }
    if (this.bandeira === '') {
      return true;
    }

    return false;
  }

  adicionarCartao() {
    this.storageService.adicionarCartao({
      nomeCartao: this.nomeCartao,
      numeroCartao: `xxxx xxxx xxxx ${this.numeroCartao.substring(12, 16)}`,
      bandeira: this.bandeira,
      ativo: true
    });
    this.fecharAddCartao();
  }

}
