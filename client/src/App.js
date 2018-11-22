import React, { Component } from 'react';
import axios from 'axios';
import { getCurrentPosition } from '@blinkmobile/geolocation';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: {},
      error: null
    }
    this.fetchWeather = this.fetchWeather.bind(this);
  }
  componentDidMount(){
    getCurrentPosition()
      .then(position => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        return this.fetchWeather(lat, lon);
      })
      .catch(err => {
        this.setState({
          error: err
        })
      });
  }
  fetchGeoLocation() {}
  fetchWeather(lat, lon) {
    axios.get(`/forecast/coords/${lat},${lon}`)
      .then(response => {
        this.setState({
          weather: response.data.weather
        })
      })
      .catch(err => {
        this.setState({
          error: err
        })
      });
  }
  render() {
    return (
      <div>
        <pre>{JSON.stringify(this.state.weather, null, 2)}</pre>
      </div>
    );
  }
}

export default App;
