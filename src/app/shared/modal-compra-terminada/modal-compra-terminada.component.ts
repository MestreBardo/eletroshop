import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-compra-terminada',
  templateUrl: './modal-compra-terminada.component.html',
  styleUrls: ['./modal-compra-terminada.component.scss']
})
export class ModalCompraTerminadaComponent implements OnInit {

  constructor(public modalRef: BsModalRef) { }

  ngOnInit(): void {
  }

}
