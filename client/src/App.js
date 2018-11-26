import React, { Component } from 'react';
import { getCurrentPosition } from '@blinkmobile/geolocation';
import { fetchWeather } from './helpers';
import {} from 'react-loader-spinner';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: {},
      error: null,
      loading: true
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
          weather: weather,
          loading: false
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
    const { loading, weather, error } = this.state;
    if (loading){
      return <loader type="puff" color="black" height="80%" width="80%" />
    }
    return (
      <div>
        <pre>{JSON.stringify(this.state.weather, null, 2)}</pre>
      </div>
    );
  }
}

export default App;
