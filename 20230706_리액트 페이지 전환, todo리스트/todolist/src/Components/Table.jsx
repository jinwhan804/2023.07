import React from 'react'
import {Line} from './index';

const Table = ({list,setList}) => {
    const headLine = {
        todo : '할 일',
        done : '진행 단계'
    };

    console.log(list)

    return (
        <ul>
            <Line data={headLine} index={'No.'} change={'진행 체크'}/>
            {list.map((el,index) => <Line data={el} index={index} change={'check'} setList={setList} list={list}/>
            )}
        </ul>
    )
}

export default Table