import React from 'react'

const Insert = ({setTodo, setList, list}) => {
    let writeTodo = '';
    
    const ReadyToInsert = (e)=>{
        writeTodo = e.target.value;
    }
    
    const InsertTodo = ()=>{
        let insertTodo = {
            todo : writeTodo,
            done : false
        };        

        setTodo(insertTodo);

        let listData = list;

        listData.push(insertTodo);

        setList(listData);
    }

    return (
        <div className='insert'>
            <label>내용</label>
            <input onChange={ReadyToInsert}></input>            
            <button onClick={InsertTodo}>할 일 추가</button>
        </div>
    )
}

export default Insert