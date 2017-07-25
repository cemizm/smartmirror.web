import { TestBed, inject } from '@angular/core/testing';

import { WeatherService } from './weather.service';
import {ConnectionBackend, Http, RequestOptions} from "@angular/http";

describe('WeatherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeatherService, Http, ConnectionBackend, RequestOptions]
    });
  });

  it('should ...', inject([WeatherService], (service: WeatherService) => {
    expect(service).toBeTruthy();
  }));
});
