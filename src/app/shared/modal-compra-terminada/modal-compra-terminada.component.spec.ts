import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCompraTerminadaComponent } from './modal-compra-terminada.component';

describe('ModalCompraTerminadaComponent', () => {
  let component: ModalCompraTerminadaComponent;
  let fixture: ComponentFixture<ModalCompraTerminadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCompraTerminadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCompraTerminadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
