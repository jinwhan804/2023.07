function Login(id,pw){
    return(dispatch)=>{
        // 데이터 베이스 요청, 응답 과정이 이 곳에 들어가면 된다. 비동기 처리도 여기서 작업
        dispatch({type : 'LOGIN', payload : {id,pw}})
    }
}

function Logout(){
    return(dispatch)=>{
        // 데이터 베이스 요청, 응답 과정이 이 곳에 들어가면 된다. 비동기 처리도 여기서 작업
        dispatch({type : 'LOGOUT'})
    }
}

export const logins = {Login,Logout};