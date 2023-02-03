import { Conditional } from '@angular/compiler';
import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { Weather } from 'src/app/model';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{

  @Output()
  onFormSubmit = new Subject<Weather>()

  form!: FormGroup
  city!: string 
  model!: Weather
  // model  = new Weather('Singapore', 0, 0, 0, "", 0, 0)
  apiKey = "9032e308126ac3cc27fcff6250aff95d"

  constructor(private fb:FormBuilder, private wSvc: WeatherService) {}

  ngOnInit(): void {
      this.form = this.createForm()
  }

  processForm() {
    this.city = this.form.value['cityName']
    console.log('searching weather for: ', this.city)
    //Chuck Method
    // this.wSvc.getWeather(this.city, this.apiKey).then((result) => {
    //   this.model.cityName = result.name;
    //   // this.model.temp = result.main.temp;
    //   // this.model.pressure = result.main.pressure;
    //   // this.model.humidity = result.main.humidity;
    //   // this.model.description = result.weather[0].description;
    //   // this.model.windDeg = result.wind.deg;
    //   // this.model.windSpeed = result.wind.speed;
    
    // console.log(this.model)
    //   this.onFormSubmit.next(this.model)
    // }).catch((error) => {
    //   console.log(error)
    // })

    //Kenneth Method
    this.wSvc.getWeather(this.city, this.apiKey).then((result) => {
      this.model = new Weather (result.name,
                    result.main.temp,
                    result.main.pressure,
                    result.main.humidity,
                    result.weather[0].description,
                    result.wind.deg,
                    result.wind.speed)
      console.log(this.model)
      this.onFormSubmit.next(this.model)
    }).catch((error) => {
      console.log(error)
    })
  
    // call on API and get result back and parse to parent class with 'onFormSubmit'
    
    this.form.reset();
  }


  private createForm(): FormGroup {
    return this.fb.group({
      cityName: this.fb.control<string>(""),
    })
  }
}
