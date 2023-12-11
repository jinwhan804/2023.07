import React from 'react';
import { Header, PageMove } from '../Components';

const Main = () => {
  return (
    <div>
        <Header name={'메인'}/>
        <PageMove path={'/login'} name={'로그인'}/>
    </div>
  )
}

export default Main