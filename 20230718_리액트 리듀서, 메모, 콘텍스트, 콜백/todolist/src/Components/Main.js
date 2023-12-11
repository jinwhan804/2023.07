import React, { useContext, useEffect, useMemo, useState } from 'react';
import {Line} from './';
import { Global } from '../App';

const Main = () => {
    const [title,setTitle] = useState('일지');
    const [user,setUser] = useState('koo');
    const {todolist} = useContext(Global);

    let changeTitle;
    let changeUser;

    useEffect(()=>{
        console.log(todolist);
    },[todolist])

    const ChangeTitle = (e)=>{
        changeTitle = e.target.value;
    }

    const ClickTitleChange = ()=>{
        setTitle(changeTitle);
    }

    const ChangeUser = (e)=>{
        changeUser = e.target.value;
    }

    const ClickUserChange = ()=>{
        setUser(changeUser);
    }

    const handleTitle = useMemo(()=>{
        return title;
    },[title])

    const handleUser = useMemo(()=>{
        return user;
    },[user])

    return (
        <div className='list_main'>
            <p>리스트 제목 : {handleTitle}</p><br/>
            <input onChange={ChangeTitle}></input>
            <button onClick={ClickTitleChange}>제목 변경</button><br/>
            <p>사용자 이름 : {handleUser}</p><br/>
            <input onChange={ChangeUser}></input>
            <button onClick={ClickUserChange}>사용자 변경</button>
            <ul>
                <Line index={'No.'} todo={'할 일'} date={'기한(일)'}/>
                {todolist && todolist.map((el,index)=> {return <Line index={index} todo={el.todo} date={el.date}/>})}
            </ul>
        </div>
    )
}

export default Main