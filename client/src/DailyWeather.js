import React from 'react'


function DailyWeather(props) {
    const { data } = props.data;
    const firstDay = data[0];
    const { apparentTemperatureMax } = firstDay;
    return (
        <div className='d-flex justify-content-center pt-5 bg-primary border-top border-dark flex-grow-1'>
            <h3 className='m-0'> The first day forcast: {apparentTemperatureMax} &deg;F</h3>
        </div>
        
    )
}

export default DailyWeather;