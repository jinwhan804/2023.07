import React from 'react'
import { Header,Body } from '../Components'

const Main = ({setList, list, setTodo}) => {
  return (
    <div>
        <Header />
        <Body setList={setList} list={list} setTodo={setTodo}/>
    </div>
  )
}

export default Main