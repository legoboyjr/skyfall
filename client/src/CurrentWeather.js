import React from 'react'


function CurrentWeather(props) {
    const { apparentTemperature } = props.data
    return (
        <h1>The temperature is curently: {apparentTemperature} &deg;F</h1>
    )
}

export default CurrentWeather;