import { ModalModule } from 'ngx-bootstrap/modal';
import { MainRoutingModule } from './main-routing.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { CardComponent } from './carrinho/card/card.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ListaCarrinhoComponent } from './carrinho/lista-carrinho/lista-carrinho.component';
import { ListaCartoesComponent } from './carrinho/lista-cartoes/lista-cartoes.component';
import { AddCartaoComponent } from './carrinho/lista-cartoes/add-cartao/add-cartao.component';
import { CardCartaoComponent } from './carrinho/card-cartao/card-cartao.component';
import { NumeroCartaoPipe } from './carrinho/lista-cartoes/add-cartao/numero-cartao.pipe';
import { FiltraAtivosPipe } from './carrinho/lista-cartoes/filtra-ativos.pipe';
import { ResumoComponent } from './carrinho/resumo/resumo.component';
import { HistoricoComponent } from './historico/historico.component';
import { CardHistoricoComponent } from './historico/card-historico/card-historico.component';



@NgModule({
  declarations: [MainComponent,
    CarrinhoComponent, CardComponent,
    ListaCarrinhoComponent, ListaCartoesComponent,
    AddCartaoComponent, CardCartaoComponent, NumeroCartaoPipe, FiltraAtivosPipe, ResumoComponent, HistoricoComponent, CardHistoricoComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot()
  ]
})
export class MainModule { }
