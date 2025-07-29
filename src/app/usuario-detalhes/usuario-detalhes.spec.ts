import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioDetalhes } from './usuario-detalhes';

describe('UsuarioDetalhes', () => {
  let component: UsuarioDetalhes;
  let fixture: ComponentFixture<UsuarioDetalhes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsuarioDetalhes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuarioDetalhes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
