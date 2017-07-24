import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarViewComponent } from './calendar-view.component';
import {SharedModule} from "../../../../shared/shared.module";
import {BaseService, EventsService, SmartMirrorModule} from "@cemizm/smartmirror-shared";

describe('CalendarViewComponent', () => {
  let component: CalendarViewComponent;
  let fixture: ComponentFixture<CalendarViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarViewComponent ],
      imports: [SharedModule],
      providers: [SmartMirrorModule, EventsService, BaseService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
