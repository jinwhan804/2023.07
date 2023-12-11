import React from 'react';
import { useSelector } from 'react-redux';
import CountView2 from './CountView2';

const CountView = () => {
    // 저장소 값을 가져온다.
    // react-redux 라이브러리에서 제공. react hook 함수
    // useSelector : 전역 상태 값을 조회할 때 사용
    // 상태값 중 count값을 반환
    // count가 변경되면 리렌더링 진행
    const count = useSelector(state => state.count);

    return (
        <div>
            {count}
            <CountView2></CountView2>
        </div>
    )
}

export default CountView