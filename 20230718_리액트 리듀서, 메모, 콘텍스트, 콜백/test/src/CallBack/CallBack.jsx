import React,{useCallback, useState} from 'react'

// react 공식문서에서 useCallback은 메모이제이션 콜백을 반환한다는 내용이 존재한다.
const CallBack = () => {
    const [count,setCount] = useState(0);
    const [count1,setCount1] = useState(0);

    // 첫 번째 매개 변수는 콜백함수를 전달하고 두 번째 매개 변수는 배열을 전달한다.
    // 이 배열에 들어가는 값이 주시하는 값
    const handleCount = useCallback(()=>{
        setCount(count + 1);
        // 복잡한 연산을 사용하는데 동일한 값을 내보내는 경우 메모이제이션 기법으로
        // 동일한 연산의 경우 메모리에 저장해두었다가 사용하는 기법
        // 다른 결과가 필요할 경우에만 연산하여 반환하는 함수
    },[count1]);

    const handleCount1 = useCallback(()=>{
        setCount1(count1 + 1);
    },[count1])

    return (
        <div>
            <div>
                <h1>첫 번째 카운트 : {count}</h1>
                <p>count1이 변하지 않으면 안 변해</p>
                <button onClick={handleCount}>count</button>
            </div>
            <div>
                <h1>두 번째 카운트 : {count1}</h1>
                <button onClick={handleCount1}>count1</button>
            </div>
        </div>
    )
}

export default CallBack