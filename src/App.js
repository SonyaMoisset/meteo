import React, { Component } from 'react';
import Weather from './components/Weather';

export default class App extends Component {
    render() {
        return (
            <div>
                <h1>Weather App</h1>
                <Weather />
            </div>
        );
    }
}
