import React, { useEffect } from 'react';
import { Header,PageMove } from '../Components';
import {useDispatch, useSelector} from 'react-redux';
import { logins } from '../Middlewares';


const Login = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector(state => state.login);
  let user_id = '';
  let user_pw = '';

  const UserId = (e)=>{
    user_id = e.target.value;
  }

  const UserPw = (e)=>{
    user_pw = e.target.value;
  }

  const LoginBtn = ()=>{
    dispatch(logins.LoginCheck(user_id,user_pw));
  }

  useEffect(()=>{
    console.log(isLogin)
  },[isLogin])

  return (
    <div>
      <Header name={'로그인'}/>
      <PageMove path={'/'} name={'메인'}/>
      <PageMove path={'/signup'} name={'회원가입'}/>
      <label>ID</label>
      <input onChange={UserId}></input><br/>
      <label>PW</label>
      <input onChange={UserPw}></input><br/>      
      <button onClick={LoginBtn}>로그인</button>
    </div>
  )
}

export default Login