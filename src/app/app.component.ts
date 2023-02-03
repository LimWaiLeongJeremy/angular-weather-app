import { Component } from '@angular/core';
import { Weather } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  weatherDetails!: Weather;

  setWeatherDetails(weather: Weather) {
    //this.forms = [ ...this.forms, uf]
    this.weatherDetails = weather;
    console.log("weather recieved: ", this.weatherDetails)
  }

}
