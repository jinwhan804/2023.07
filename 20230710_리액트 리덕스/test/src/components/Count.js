import React from 'react'
import { useDispatch } from 'react-redux'

// 전역상태에 있는 값을 업데이트 해준다.
// useDispatch 액션을 보낼 수 있게 react hook 함수 사용
const Count = () => {
    const dispatch = useDispatch();
    // dispatch 함수를 사용해서 action을 던질 수 있다.
    // dispatch 함수를 사용할 때 매개 변수로 객체를 전달한다.
    // 객체의 규칙은 {type, payload} 
    // type : 동작시킬 행동의 이름
    // payload : 선택사항. 상태 변경 시 데이터 전달이 필요하면 사용

    const handlerAdd = ()=>{
        dispatch({
            type : '김치볶음밥'
        })
    }
    const handlerRemove = ()=>{
        dispatch({
            type : '계란볶음밥'
        })
    }

    return (
        <div>
            <button onClick={handlerAdd}>김치볶음밥</button>
            <button onClick={handlerRemove}>계란볶음밥</button>
        </div>
    )
}

export default Count