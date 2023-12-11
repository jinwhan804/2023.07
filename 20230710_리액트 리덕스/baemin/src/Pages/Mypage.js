import React from 'react';
import { Header,PageMove,Dish } from '../Components';
import { useSelector} from 'react-redux';

const Mypage = () => {
    const select = useSelector(state=>state.userSelect);

    return (
        <div>
            <Header name={'마이'}/>
            <PageMove path={'/'} name={'메인'}/>
            <PageMove path={'/order'} name={'음식 주문'}/>
            <div>
                {select.map(el=> <Dish name={el} />)}
            </div>
        </div>
    )
}

export default Mypage