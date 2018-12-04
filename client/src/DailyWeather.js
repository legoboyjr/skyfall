import React from 'react'
import { format} from 'date-fns'

const renderDay = day =>
    <div key={day.time}>
        <h3 className='m-0'> {format(new Date(day.time*1000),'dddd')}: {day.apparentTemperatureHigh} &deg;F</h3>
        <hr />
    </div>
    


function DailyWeather(props) {
    const { data } = props.data;
    const items = data.map(renderDay)
    return (
        <div className='d-flex align-items-center pt-5 bg-primary border-top border-dark flex-grow-1 flex-column'style={{ overflowY: 'scroll' }}>
            <h2>Daily Weather:</h2>
            {items}
        </div>
    )
}

export default DailyWeather;