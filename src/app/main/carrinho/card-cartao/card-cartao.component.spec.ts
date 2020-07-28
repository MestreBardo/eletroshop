import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCartaoComponent } from './card-cartao.component';

describe('CardCartaoComponent', () => {
  let component: CardCartaoComponent;
  let fixture: ComponentFixture<CardCartaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardCartaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCartaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
