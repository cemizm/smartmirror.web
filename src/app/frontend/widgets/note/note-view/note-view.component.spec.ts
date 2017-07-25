import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteViewComponent } from './note-view.component';
import {SharedModule} from "../../../../shared/shared.module";
import {BaseService, TaskService} from "@cemizm/smartmirror-shared";

describe('NoteViewComponent', () => {
  let component: NoteViewComponent;
  let fixture: ComponentFixture<NoteViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteViewComponent ],
      imports: [SharedModule],
      providers: [TaskService, BaseService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
