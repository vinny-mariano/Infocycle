import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Processadores } from './processadores';

describe('Processadores', () => {
  let component: Processadores;
  let fixture: ComponentFixture<Processadores>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Processadores],
    }).compileComponents();

    fixture = TestBed.createComponent(Processadores);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
