import React, { useMemo, useState } from 'react'

const Memo = () => {
    const [count,setCount] = useState(0);
    const [count1,setCount1] = useState(0);

    const handleCount = ()=>{
        console.log('나는 count');
        setCount(count + 1);
        setCount1(count1 + 1);
    }

    // 컴포넌트의 리랜더링을 관리할 때
    // 부모 컴포넌트가 리랜더링 되면 자식 컴포넌트도 리랜더링 된다.
    // 자식 컴포넌트가 너무 많으면 최적화가 되지 않는다.
    const handleCount1 = useMemo(()=>{
        console.log('나는 count1');
        return (count1 + 1);
    },[count1])
    // count1을 주시하고 있다가 값이 변하면 새로운 값으로 업데이트

    return (
        <div>
            <p>memo</p>
            <button onClick={handleCount}>+</button>
            <p>handleCount1 : {handleCount1}</p>
        </div>
    )
}

export default Memo