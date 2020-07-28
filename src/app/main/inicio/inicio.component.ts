import { Component, OnInit, HostListener, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ModalPokemonComponent } from 'src/app/shared/modal-pokemon/modal-pokemon.component';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  constructor(private renderer: Renderer2, private modalService: BsModalService) { }
  atualCordenadaX: number;
  atualPosicao = 0;
  @ViewChild('swipe', {static: true}) swipeEl: ElementRef;
  ngOnInit() {
  }

  abrirModalPokemon(url: string) {
    this.modalService.show(ModalPokemonComponent, {class: 'second-modal-backdrop h-75 modal-width-1000',
    initialState: {url}, ignoreBackdropClick: true});
  }

}
