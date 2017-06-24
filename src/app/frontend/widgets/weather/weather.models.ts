/**
 * Created by Meike on 16.06.2017.
 */
export interface WeatherForecast {
  city: City;
  weatherList: WeatherListItem[];
  cnt: number;
  message: number;
  cod: string;
}
export interface WeatherCurrent {
  coord: Coord;
  weatherinformation: WeatherInformation;
  base: string;
  maininformation: MainInformationCurrent;
  visibility: number;
  windinformation: WindInformation;
  cloudinformation: CloudInformation;
  dt: number;
  sysInformation: SysInformationCurrent;
  id: number;
  name: string;
  cod: number;
}
export interface City {
  id: number;
  name: string;
  coord: Coord;
  country: string;
}
export interface Coord {
  lat: number;
  lon: number;
}
export interface WeatherListItem {
  dt: number;
  maininformation: MainInformationForecast;
  weatherinformation: WeatherInformation;
  /*
  cloudinformation: CloudInformation;
  windinformation: WindInformation;
  raininformation: RainInformation;
  sysinformation: SysInformationForecast;
  */
  dt_txt: string;
}
export interface MainInformationForecast {
  temp: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}
export interface MainInformationCurrent {
  temp: number;
  pressure: number;
  humidity: number;
  temp_min: number;
  temp_max: number;
}
export interface WeatherInformation {
  weatherId: number;
  weatherMain: string;
  weatherDescription: string;
  icon: string;
}
export interface CloudInformation {
  all: number;
}
export interface WindInformation {
  speed: number;
  deg: number;
}
export interface RainInformation {
  null;
}
export interface SysInformationForecast {
  pod: string;
}
export interface SysInformationCurrent {
  type: number;
  id: number;
  message: number;
  country: string;
  sunrise: number;
  sunset: number;
}
