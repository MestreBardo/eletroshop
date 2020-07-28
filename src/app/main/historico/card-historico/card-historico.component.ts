import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-historico',
  templateUrl: './card-historico.component.html',
  styleUrls: ['./card-historico.component.scss']
})
export class CardHistoricoComponent implements OnInit {
  @Input() compra: any;
  constructor() { }

  ngOnInit(): void {
  }

}
