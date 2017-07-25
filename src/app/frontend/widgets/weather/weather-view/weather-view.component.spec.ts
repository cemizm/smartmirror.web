import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherViewComponent } from './weather-view.component';
import {SharedModule} from "../../../../shared/shared.module";
import {WeatherService} from "../weather.service";

describe('WeatherViewComponent', () => {
  let component: WeatherViewComponent;
  let fixture: ComponentFixture<WeatherViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherViewComponent ],
      imports: [SharedModule],
      providers: [WeatherService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
/*
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  */
});
