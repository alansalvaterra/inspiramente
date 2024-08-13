import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTesteComponent } from './home-teste.component';

describe('HomeTesteComponent', () => {
  let component: HomeTesteComponent;
  let fixture: ComponentFixture<HomeTesteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeTesteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeTesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
