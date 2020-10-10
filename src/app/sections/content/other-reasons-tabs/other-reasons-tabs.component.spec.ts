import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherReasonsTabsComponent } from './other-reasons-tabs.component';

describe('OtherReasonsTabsComponent', () => {
  let component: OtherReasonsTabsComponent;
  let fixture: ComponentFixture<OtherReasonsTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherReasonsTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherReasonsTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
