import React from 'react'


function CurrentWeather(props) {
    const { apparentTemperature } = props.data
    return (
        <h3 className='pl-4 bg-info h-100'>The temperature is curently: {apparentTemperature} &deg;F</h3>
    )
}

export default CurrentWeather;