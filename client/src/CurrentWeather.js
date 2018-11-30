import React from 'react'


function CurrentWeather(props) {
    const { apparentTemperature } = props.data
    return (
        <h3 className='bg-info'>The temperature is curently: {apparentTemperature} &deg;F</h3>
    )
}

export default CurrentWeather;