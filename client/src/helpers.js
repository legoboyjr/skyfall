import axios from 'axios';

export function fetchWeather(lat, lon) {
    return axios.get(`/forecast/coords/${lat},${lon}`)
      .then(response => {
        return response.data.weather;
      })
    }