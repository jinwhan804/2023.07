import React from 'react';
import Dates from './Dates';

const Weeks = ({weekSelect}) => {
    const defaultDates = [0,0,0,0,0,0,1];
    
    const dateFilter = () => {
        let datesArr = [];

        for (let i = 0; i < defaultDates.length; i++) {
            datesArr.push(i + (weekSelect - 2) * 7 + 2);                
        }

        return datesArr.map((date,index)=>{
            return <Dates key={index} dateSelect={date}/>
        })
    };

    return (
        <li>
            {dateFilter()}
        </li>
    )
}

export default Weeks