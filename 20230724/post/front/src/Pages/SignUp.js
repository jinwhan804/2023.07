import React from 'react';
import { Header,PageMove } from '../Components';
import axios from 'axios';

const SignUp = () => {
    let user_id = '';
    let user_pw = '';
    let nickname = '';

    const CreateId = (e)=>{
        user_id = e.target.value;
    }

    const CreatePw = (e)=>{
        user_pw = e.target.value;
    }

    const CreateNickname = (e)=>{
        nickname = e.target.value;
    }

    const SignUpDate = async()=>{
        await axios.post('http://localhost:5000/signup',{ 
            user_id : user_id,
            user_pw : user_pw,
            nickname : nickname
        },{
            withCredentials : true
        }).then((e)=>{
            if(e.data[0] == '이'){
                alert(e.data);
            }else{
                window.location.href = e.data;
            }
        })
    }
    
    return (
        <div>
            <Header name={'회원가입'}/>
            <PageMove path={'/'} name={'메인'}/>
            <label>ID</label>
            <input onChange={CreateId}></input><br/>
            <label>PW</label>
            <input onChange={CreatePw}></input><br/>
            <label>닉네임</label>
            <input onChange={CreateNickname}></input><br/>
            <button onClick={SignUpDate}>회원 가입</button>
        </div>
    )
}

export default SignUp