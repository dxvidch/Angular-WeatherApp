// import { Component } from '@angular/core';
// import { WeatherService } from './weather.service';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'weather-app';
//   city: string = 'London';
//   weatherData: any;

//   constructor(private weatherService: WeatherService) {}

//   getWeather() {
//     this.weatherService.getWeather(this.city).subscribe(
//       data => {
//         this.weatherData = data;
//       },
//       error => {
//         console.error('Error fetching weather data', error);
//       }
//     );
//   }
// }

import { Component } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather-app';
  city: string = 'London';
  weatherData: any;
  errorMessage: string = '';

  constructor(private weatherService: WeatherService) {}

  getWeather() {
    this.weatherService.getWeather(this.city).subscribe(
      data => {
        this.weatherData = data;
        this.errorMessage = '';
      },
      error => {
        this.errorMessage = 'Error fetching weather data';
        this.weatherData = null;
      }
    );
  }
}
