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
      <div className="vh-100 d-flex flex-column">
        <div className='bg-dark pb-2 border-bottom border-white'>
          <form onSubmit={this.updateWeather}>
            <input className='bg-primary text-white w-25 border border-dark mr-1 p-1 mt-2 ml-3' type="number" value={lat}
              onChange={e => this.setState({ lat: e.target.value })}
              placeholder="Latitude"
              required
              min="-90"
              max="90"
            />
            <input className='bg-primary text-white w-25 border border-dark mr-1 p-1 mt-2' type="number" value={lon}
              onChange={e => this.setState({ lon: e.target.value })}
              placeholder="Longitude"
              required
              min="-180"
              max="180"
            />
            <button className='btn-primary rounded border-0 p-1' type="submit">Go!</button>
          </form>
        </div>
        <div className="d-flex flex-grow-1">
          <div className='d-flex flex-column'>
            <CurrentWeather data={weather.currently} />
            <DailyWeather data={weather.daily} />

          </div>
          <div className="d-flex flex-column flex-grow-1">
            <HourlyWeather data={weather.hourly} />
          </div>
        </div>

      </div>
    );
  }
}

export default App;
