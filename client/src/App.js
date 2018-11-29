import React, { Component } from 'react';
import { getCurrentPosition } from '@blinkmobile/geolocation';
import { fetchWeather } from './helpers';
import Loader from 'react-loader-spinner';
import DailyWeather from './DailyWeather';
import CurrentWeather from './CurrentWeather';
import HourlyWeather from './HourlyWeather';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: {},
      error: null,
      loading: true,
      lat: '',
      lon: ''
    }
    this.updateWeather = this.updateWeather.bind(this);
  }
  updateWeather(e) {
    e.preventDefault();
    const { lat, lon } = this.state;
    fetchWeather(lat, lon)
      .then(weather => {
        this.setState({
          weather: weather
        });
      })
      .catch(err => {
        this.setState({
          error: err
        });
      });
  }
  componentDidMount() {
    getCurrentPosition()
      .then(position => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        this.setState({
          lat: lat,
          lon: lon
        })
        return fetchWeather(lat, lon);
      })
      .then(weather => {
        this.setState({
          weather: weather,
          loading: false
        })
      })
      .catch(err => {
        console.log(err)
        this.setState({
          error: err,
          loading: false
        })
      });
  }
  isGeoError(err) {
    return err && err.code && err.message;
  }

  render() {
    const { loading, weather, error, lat, lon } = this.state;
    if (loading) {
      return <Loader type="Puff" color="black" height="80" width="80" />
    }
    if (error && !this.isGeoError(error)) {
      return <h1>Please try again later....</h1>
    }
    return (
      <div>
        <div className='bg-primary pb-2'>
          <form onSubmit={this.updateWeather}>
            <input className='bg-dark text-white w-25 border border-dark mr-1 p-1 mt-2 ml-3' type="number" value={lat}
              onChange={e => this.setState({ lat: e.target.value })}
              placeholder="Latitude"
              required
              min="-90"
              max="90"
            />
            <input className='bg-dark text-white w-25 border border-dark mr-1 p-1 mt-2' type="number" value={lon}
              onChange={e => this.setState({ lon: e.target.value })}
              placeholder="Longitude"
              required
              min="-180"
              max="180"
            />
            <button className='btn-dark rounded border-0 p-1' type="submit">Go!</button>
          </form>
        </div>
        <div className='d-flex flex-column justify-content-between align-items-center vh-100'>
          <div className='d-flex h-25'>
            <CurrentWeather data={weather.currently} />
            <HourlyWeather data={weather.hourly} />
          </div>

          <div className='d-flex flex-grow-1'>
            <DailyWeather data={weather.daily} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
