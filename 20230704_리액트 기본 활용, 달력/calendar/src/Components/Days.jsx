import React from 'react'

const Days = ({oneDay}) => {

    const DayFilter = () =>{
        return oneDay;
    }

    return (
        <div className='calendarTable' >{DayFilter()}</div>
    )
}

export default Days