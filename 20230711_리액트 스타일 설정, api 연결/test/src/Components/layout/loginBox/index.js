import React from 'react';
import { LoginBoxInput, LoginBoxwrap } from './Login.styled';

const LoginBox = () => {
  return (
    // 아래처럼 작성하면 해당 값이 props값으로 넘어간다. 즉, width가 속성이 아닌 키 값으로 넘어가므로 이를 잘 고려해서 작성해준다.
    <div><LoginBoxwrap width={'1000px'}>
        <p className='login-title'>로그인 박스</p>
        <LoginBoxInput >버튼</LoginBoxInput>
    </LoginBoxwrap></div>
  )
}

export default LoginBox