import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonBackComponent } from './boton-back.component';

describe('BotonBackComponent', () => {
  let component: BotonBackComponent;
  let fixture: ComponentFixture<BotonBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
