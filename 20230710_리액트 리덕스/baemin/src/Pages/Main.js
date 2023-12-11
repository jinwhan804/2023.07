import React from 'react'
import { PageMove, Header } from '../Components';

const Main = () => {
    return (
        <div>
            <Header name={'메인'}/>
            <PageMove path={'/login'} name={'로그인'}/>
            <PageMove path={'/mypage'} name={'마이'}/>
            <PageMove path={'/order'} name={'음식 주문'}/>
        </div>
    )
}

export default Main