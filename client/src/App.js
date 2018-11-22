import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      weather: {},
      error: null
    }
  }
  componentDidMount(){
    axios.get('/forecast/coords/0,0')
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
      <div className="App">
      it works
      </div>
    );
  }
}

export default App;
