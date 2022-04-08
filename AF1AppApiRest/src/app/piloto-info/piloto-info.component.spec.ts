import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PilotoInfoComponent } from './piloto-info.component';

describe('PilotoInfoComponent', () => {
  let component: PilotoInfoComponent;
  let fixture: ComponentFixture<PilotoInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PilotoInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PilotoInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
