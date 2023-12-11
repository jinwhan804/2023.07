import React from 'react'
import {Square} from './index'

const Line = ({data, index, change, setList, list}) => {
  let temp = {
    data : data,
    index : index,
    change : change
  }

  return (
    <li>
      <Square data={index !== 'No.' ? index + 1 : index} setList={setList} list={list}/>
      <Square data={data.todo} setList={setList} list={list}/>
      <Square data={data.done} setList={setList} list={list}/>
      <Square data={temp} setList={setList} list={list}/>
    </li>
  )
}

export default Line