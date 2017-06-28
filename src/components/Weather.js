import React, { Component } from 'react';

const API_KEY = `48b7e3ece6fef5378ec6b14afd2a17b9`;

export default class Weather extends Component {
    constructor(props) {
      super(props);

      this.state = {
        city: 'Paris',
        country: '',
        lat: '',
        long: '',
        humidity: '',
        temp: '',
        main: '',
        description: ''
      }
    }

    componentDidMount() {
      this.grabWeather(this.state.city);
    }

    grabWeather(city) {
      const URL = `http://api.openweathermap.org/data/2.5/weather?APPID=${API_KEY}&q=${city}`;

      fetch(URL)
        .then(response => response.json())
        .then(json => {
          this.setState({
            country: json.sys.country,
            lat: json.coord.lat,
            lon: json.coord.lon,
            humidity: json.main.humidity,
            temp:json.main.temp,
            main: json.weather[0].main,
            description: json.weather[0].description
          });
        })
    }

    render() {
        return (
            <div>
              <h1>City: {this.state.city}</h1>
              <p>Country: {this.state.country}</p>
              <p>Latitude: {this.state.lat}</p>
              <p>Longitude: {this.state.lon}</p>
              <p>Humidity: {this.state.humidity}%</p>
              <p>Temp: {this.state.temp}F</p>
              <p>Main: {this.state.main}</p>
              <p>Description: {this.state.description}</p>
            </div>
        );
    }
}
