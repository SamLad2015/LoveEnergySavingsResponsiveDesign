import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchReasonsComponent } from './switch-reasons.component';

describe('SwitchReasonsComponent', () => {
  let component: SwitchReasonsComponent;
  let fixture: ComponentFixture<SwitchReasonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchReasonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchReasonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
