import React,{useReducer} from 'react'

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// useState를 사용하는 것과 큰 차이는 없다.
// react에서 제공하는 내장 hook 함수이다.
const Reducer = () => {
    // 상태 초기값 필요
    const init = {
        count : 0
    }

    // reducer 함수 매개 변수로 상태와 액션을 넣어준다.
    const reducer = (state,action)=>{
        // action 객체의 키값으로 type 전달
        const {type} = action
        switch (type) {
            case INCREMENT:
                return {...state,count : state.count + 1};
            case DECREMENT:
                return {...state,count : state.count - 1};        
            default:
                return state;
        }
    }

    // useReducer 함수에 매개 변수로 첫 번째는 생성한 reducer함수, 두 번째는 초기값을 넣어준다.
    const [state,dispatch] = useReducer(reducer,init);

    return (
        <div>
            지금 count의 상태는 : {state.count}
            <button onClick={()=>{dispatch({type : INCREMENT})}}>+</button>
            <button onClick={()=>{dispatch({type : DECREMENT})}}>-</button>
        </div>
    )
}

export default Reducer