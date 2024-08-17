import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoPensamentoComponent } from './novo-pensamento.component';

describe('NovoPensamentoComponent', () => {
  let component: NovoPensamentoComponent;
  let fixture: ComponentFixture<NovoPensamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NovoPensamentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovoPensamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
