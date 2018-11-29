import React from 'react'


function DailyWeather(props) {
    const { data } = props.data;
    const firstDay = data[0];
    const { apparentTemperatureMax } = firstDay;
    return (
        <h3> The first day forcast: {apparentTemperatureMax} &deg;F</h3>
    )
}

export default DailyWeather;