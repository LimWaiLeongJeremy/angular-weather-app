import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Weather } from '../model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpSvc: HttpClient) { }

    getWeather(city: string, apiKey: string): Promise<any> {
      console.log(city + " " + apiKey);
    const params = new HttpParams()
      .set("q", city)
      .set("appid", apiKey)
      .set("units", "metric");

    return this.httpSvc.get("https://api.openweathermap.org/data/2.5/weather", { params: params })
      .toPromise();
  }
}
