import React, { Component } from 'react';
import { getCurrentPosition } from '@blinkmobile/geolocation';
import { fetchWeather } from './helpers';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: {},
      error: null
    }
  }
  componentDidMount(){
    getCurrentPosition()
      .then(position => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        return fetchWeather(lat, lon);
      })
      .then(weather => {
        this.setState({
          weather: weather
        })
      })
      .catch(err => {
        this.setState({
          error: err
        })
      });
  }
  fetchGeoLocation() {}

  render() {
    return (
      <div>
        <pre>{JSON.stringify(this.state.weather, null, 2)}</pre>
      </div>
    );
  }
}

export default App;
