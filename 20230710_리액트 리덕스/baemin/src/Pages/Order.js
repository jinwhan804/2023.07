import React from 'react';
import { Header,PageMove,Dish } from '../Components';
import {useSelector} from 'react-redux';

const Order = () => {
    const menu = useSelector(state => state.dishList);
    console.log(menu)
    return (
        <div>
            <Header name={'음식 주문'}/>
            <PageMove path={'/'} name={'메인'}/>
            <PageMove path={'/mypage'} name={'마이'}/>
            <div>
                {menu.map(el=> <Dish name={el.name} price={el.price}/>)}
            </div>
        </div>
    )
}

export default Order