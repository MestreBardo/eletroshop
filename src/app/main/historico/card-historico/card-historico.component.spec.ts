import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHistoricoComponent } from './card-historico.component';

describe('CardHistoricoComponent', () => {
  let component: CardHistoricoComponent;
  let fixture: ComponentFixture<CardHistoricoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardHistoricoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardHistoricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
