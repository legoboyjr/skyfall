import React, { Component } from 'react';
import axios from 'axios';
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
  componentDidMount() {
    this.fetchWeather(0,0);
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
