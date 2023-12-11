import axios from 'axios';

const LoginCheck = (id,pw)=>{
    return async(dispatch)=>{
        await axios.post('http://localhost:5000/login',{
            user_id : id, 
            user_pw : pw
        },{
            withCredentials : true
        }).then((e)=>{
            if(e.data == 'No Id'){
                dispatch({type : 'NOID', payload : '아이디가 존재하지 않습니다.'});
            }else if(e.data == 'Pw Error'){
                dispatch({type : 'NOPW', payload : '비밀번호가 일치하지 않습니다.'});
            }else{
                dispatch({type : 'LOGIN', payload : e.data});
            }
        })
    }
}

export const logins = {LoginCheck}