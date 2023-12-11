import React from 'react'
import {Table,Insert} from './index'

const Body = ({setList, list, setTodo}) => {
  return (
    <div>
        <Insert setTodo={setTodo} setList={setList} list={list}/>
        <Table list={list} setList={setList}/>
    </div>
  )
}

export default Body