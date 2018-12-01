import React from 'react'


function CurrentWeather(props) {
    const { apparentTemperature } = props.data
    return (
        <div className='d-flex justify-content-center align-items-center text-uppercase flex-grow-1 bg-info m-0 p-5'>
            <h2 className=''>The temperature is curently: {apparentTemperature} &deg;F</h2>
        </div>
    )
}

export default CurrentWeather;