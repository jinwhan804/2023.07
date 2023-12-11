import React from 'react';
import { useSelector } from 'react-redux';

const CountView2 = () => {
    // 저장소 값을 가져온다.
    // react-redux 라이브러리에서 제공. react hook 함수
    // useSelector : 전역 상태 값을 조회할 때 사용
    // 상태값 중 count값을 반환
    // count가 변경되면 리렌더링 진행
    // 부모의 props 값을 받지 않고 컴포넌트가 전역 상태의 값을 직접 접근해서 받아온다.
    const count = useSelector(state => state.count);

    return (
        <div>
            {count}
        </div>
    )
}

export default CountView2