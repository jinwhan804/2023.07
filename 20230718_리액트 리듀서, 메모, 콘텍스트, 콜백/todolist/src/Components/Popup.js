import React, { useContext } from 'react';
import { Global } from '../App';

const Popup = () => {
    const {todolist,setTodolist} = useContext(Global);

    let newTodo;
    let newDate;
    let listData = [...todolist];

    const insertTodo = (e)=>{
        newTodo = e.target.value;
    }

    const insertDate = (e)=>{
        newDate = e.target.value;
    }

    const insertList = ()=>{
        let newList =  {
            todo : newTodo,
            date : newDate            
        }

        listData.push(newList);

        setTodolist(listData);
    }

    return (
        <div className='popup'>
            <label>할일</label>
            <input onChange={insertTodo}></input>
            <label>기간</label>
            <input onChange={insertDate}></input>
            <button onClick={insertList}>일정 추가</button>
        </div>
    )
}

export default Popup