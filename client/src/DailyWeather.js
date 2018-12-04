import React from 'react'

const renderDay = day =>
    <div key={day.temp}>
        <h3 className='m-0'> Monday: {day.apparentTemperatureHigh} &deg;F</h3>
        <hr />
    </div>
    
function DailyWeather(props) {
    const { data } = props.data;
    const items = data.map(renderDay)
    return (
        <div className='d-flex align-items-center pt-5 bg-primary border-top border-dark flex-grow-1 flex-column'style={{ overflowY: 'scroll' }}>
            {items}
        </div>
    )
}

export default DailyWeather;