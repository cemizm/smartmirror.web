import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalenderweekComponent } from './calenderweek.component';

describe('CalenderweekComponent', () => {
  let component: CalenderweekComponent;
  let fixture: ComponentFixture<CalenderweekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalenderweekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalenderweekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
