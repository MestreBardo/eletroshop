import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagemLoaderDirective } from './directives/imagem-loader.directive';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalPokemonComponent } from './modal-pokemon/modal-pokemon.component';
import { ModalCompraTerminadaComponent } from './modal-compra-terminada/modal-compra-terminada.component';
import { AjustaValoresPipe } from './modal-pokemon/ajusta-valores.pipe';


@NgModule({
  declarations: [ImagemLoaderDirective, ModalPokemonComponent, ModalCompraTerminadaComponent, AjustaValoresPipe],
  imports: [
    CommonModule,
    ModalModule.forRoot()
  ],
  exports: [ImagemLoaderDirective, ModalPokemonComponent, ModalCompraTerminadaComponent]
})
export class SharedModule { }
