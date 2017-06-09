import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherpreviewComponent } from './weatherpreview.component';

describe('WeatherpreviewComponent', () => {
  let component: WeatherpreviewComponent;
  let fixture: ComponentFixture<WeatherpreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherpreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherpreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
