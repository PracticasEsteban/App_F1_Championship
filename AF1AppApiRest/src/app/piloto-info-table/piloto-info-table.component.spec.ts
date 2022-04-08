import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PilotoInfoTableComponent } from './piloto-info-table.component';

describe('PilotoInfoTableComponent', () => {
  let component: PilotoInfoTableComponent;
  let fixture: ComponentFixture<PilotoInfoTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PilotoInfoTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PilotoInfoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
