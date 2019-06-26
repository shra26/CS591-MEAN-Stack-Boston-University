import { Component, OnInit } from '@angular/core';
import { WEATHER } from './models/weather';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { connection } from './config/constants';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'PS6';
  Weather: WEATHER;
  httpClient: any;
  city: string;
  requestData: any;
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  checkCity() {
    this.httpClient
      .get(connection.urlMain, {
        headers: new HttpHeaders()
          .set('data', this.city || 'Boston')
          .set('Access-Control-Allow-Origin', 'http://localhost:3000')
      })
      .subscribe(data => {
        this.Weather = data.weather;
        this.requestData = data.fromDB;
      });
  }
  constructor(private http: HttpClient) {
    this.httpClient = http;
  }
  ngOnInit() {}
}
