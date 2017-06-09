import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalenderdayComponent } from './calenderday.component';

describe('CalenderdayComponent', () => {
  let component: CalenderdayComponent;
  let fixture: ComponentFixture<CalenderdayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalenderdayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalenderdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
