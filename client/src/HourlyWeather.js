import React from 'react'

const singleHour = hour =>
<div>
    <p key={hour.time}>
        Temperatures {hour.apparentTemperature}&deg;
    </p>
    <p key={hour.time}>
        Time: {new Date(hour.time * 1000).toString()}
    </p>
</div>

function HourlyWeather(props) {
    const { data } = props.data;
    const threeHours = data.slice(0, 3);
    const items = threeHours
        .map(singleHour)
    return (
        <h4 className='bg-dark text-white'>
            {items}
        </h4>
    )
}

export default HourlyWeather;