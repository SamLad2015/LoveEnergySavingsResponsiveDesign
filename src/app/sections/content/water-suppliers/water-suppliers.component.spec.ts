import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterSuppliersComponent } from './water-suppliers.component';

describe('WaterSuppliersComponent', () => {
  let component: WaterSuppliersComponent;
  let fixture: ComponentFixture<WaterSuppliersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaterSuppliersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaterSuppliersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
