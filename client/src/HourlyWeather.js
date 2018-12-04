import React from 'react'


const singleHour = hour =>
    <div key={hour.time}>
        <p>
            Temperatures {hour.apparentTemperature}&deg;
    </p>
        <p >
            Time: {new Date(hour.time * 1000).toString()}
        </p>
        <hr />
    </div>



function HourlyWeather(props) {
    const { data } = props.data;
    const threeHours = data.slice(0, 24);
    const items = threeHours
        .map(singleHour)
    return (
        <div className='m-0 bg-dark text-white flex-grow-1 d-flex flex-column align-items-center pt-5' style={{ overflowY: 'scroll' }}>
            <h2>Hourly Weather:</h2>
            {items}
        </div>
    )
}

export default HourlyWeather;