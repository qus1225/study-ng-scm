import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDashbaordComponent } from './main-dashbaord.component';

describe('MainDashbaordComponent', () => {
  let component: MainDashbaordComponent;
  let fixture: ComponentFixture<MainDashbaordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainDashbaordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainDashbaordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
