import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordianListComponent } from './accordian-list.component';

describe('AccordianListComponent', () => {
  let component: AccordianListComponent;
  let fixture: ComponentFixture<AccordianListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordianListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordianListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
