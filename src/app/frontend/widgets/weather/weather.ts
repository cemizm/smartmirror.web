export class WeatherCurrent{
  constructor(
    public city: string,
    public description: string,
    public temperature: number,
    public time: number){
    this.city = city;
    this.description = description;
    this.temperature = temperature;
    this.time = time;
  }
}

export class WeatherForecast{
  constructor(
    public description: string,
    public temperature: number,
    public time: number){
    this.description = description;
    this.temperature = temperature;
    this.time = time;
  }
}


