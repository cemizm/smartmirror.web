import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendermonthComponent } from './calendermonth.component';

describe('CalendermonthComponent', () => {
  let component: CalendermonthComponent;
  let fixture: ComponentFixture<CalendermonthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendermonthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendermonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
