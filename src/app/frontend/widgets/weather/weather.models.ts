/**
 * Created by Meike on 16.06.2017.
 */
export interface WeatherForecast{
  city: City;
  weatherList: WeatherListItem[];
  cnt: number;
  message: number;
  cod: string;
}
export interface City{
  id: number;
  name: string;
  coord: Coord;
  country: string;
}
export interface Coord{
  lat: number;
  lon: number;
}
export interface WeatherListItem{
  dt: number;
  maininformation: MainInformation;
  weatherinformation: WeatherInformation;
  cloudinformation: CloudInformation;
  windinformation: WindInformation;
  raininformation: RainInformation;
  sysinformation: SysInformation;
  dt_txt: string;
}
export interface MainInformation{
  temp: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}
export interface WeatherInformation{
  weatherId: number;
  weatherMain: string;
  weatherDescription: string;
  icon: string;
}
export interface CloudInformation{
  all: number;
}
export interface WindInformation{
  speed: number;
  deg: number;
}
export interface RainInformation{
  null;
}
export interface SysInformation{
  pod: string;
}
