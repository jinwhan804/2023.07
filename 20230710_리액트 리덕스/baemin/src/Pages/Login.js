import React from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { PageMove, Header } from '../Components';

const Login = () => {
    const dispatch = useDispatch();
    const login = useSelector(state => state.isLogin);
    
    console.log(login)

    const LoginFunction = () =>{
        dispatch({
            type : 'LOGINCONDITION',
            payload : !login
        })
    }

    return (
        <div>
            <Header name={'로그인'}/>
            <PageMove path={'/'} name={'메인'}/>
            <button onClick={LoginFunction}>로그인/로그아웃</button>
        </div>
    )
}

export default Login