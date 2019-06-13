import { Component } from '@angular/core';
import { WEATHER } from './weather';
import { weather } from '../assets/mockData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Problem Set 5';
  weather = weather;
  private weatherPoint: WEATHER;

  selectWeather(wea: WEATHER) {
    this.weatherPoint = wea;
  }
}
