import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritosPensamentoComponent } from './favoritos-pensamento.component';

describe('FavoritosPensamentoComponent', () => {
  let component: FavoritosPensamentoComponent;
  let fixture: ComponentFixture<FavoritosPensamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavoritosPensamentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoritosPensamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
