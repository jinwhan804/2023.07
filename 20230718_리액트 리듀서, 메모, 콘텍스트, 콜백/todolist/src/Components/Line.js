import React from 'react';
import {Div} from './';

const Line = ({index,todo,date}) => {
    return (
        <li>
            <Div name={'index'} data={isNaN(index) ? index : index + 1}/>
            <Div name={'todo'} data={todo}/>
            <Div name={'date'} data={date}/>
        </li>
    )
}

export default Line