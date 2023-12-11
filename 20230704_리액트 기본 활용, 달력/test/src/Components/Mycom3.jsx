// 함수형 컴포넌트 생성

// 클래스형 컴포넌트보다 직관적으로 보기가 쉽다.

// rafce (react arrow function component export)

import React,{useEffect, useState} from 'react'

// 함수형 컴포넌트에서 state와 props 값을 어떻게 관리하나
// react hook useState useEffect
// useState : 상태값을 만들어준다. 상태값을 수정할 때 사용할 메소드를 만들어준다.
// useEffect : life cycle을 지원해준다.

// 함수형 컴포넌트의 props 값은 함수의 매개 변수로 전달된다.
// 구조 분해 할당해서 바로 사용해도 문제 없다.
const Mycom3 = ({newNum,newNum2,newNum3}) => {
    console.log(newNum,newNum2,newNum3);
    let count = 0;
    // 이런 식으로 변수를 선언하게 되면 컴포넌트가 리랜더링되면서 변수가 다시 선언되기 때문에 필요한 값은 상태값으로 설정해야 한다.

    // useState : 첫번째 반환 값이 상태 변수, 두 번째 값은 상태 변수를 업데이트할 setState함수
    // useState 매개 변수로 전달한 값이 초기 값
    const [num,setNum] = useState(0);
    const [active,setActive] = useState(false);
    
    // useEffect : 첫 번째 매개 변수 함수 전달, 두 번째 매개 변수 배열을 전달
    // 첫 번째로 전달한 함수를 두 번째 매개 변수의 상태를 확인하고 실행시킨다.
    // 빈 배열을 전달한 경우 = componentDidMount
    // 배열에 값을 넣을 경우, 배열에 전달된 값이 수정될 경우에 실행 = componentDidMount, componentDidUpdate
    // 배열에 전달한 값만 주시한다.
    useEffect(()=>{
        console.log('componentDidMount');
    },[])

    useEffect(()=>{        
        // componentDidUpdate처럼만 사용하고자 한다면 제어문을 사용해서 만들어준다
        console.log('componentDidMount, componentDidUpdate');
        console.log('나는 num');
        // 상태가 변한 이후의 값을 사용하는 life cycle 함수
        console.log('상태',num);
    },[num])

    useEffect(()=>{
        console.log('나는 active');
    },[active])

    useEffect(()=>{
        // num, active 둘 중 하나만 변경되도 실행
        console.log('num이랑 active 둘 중에 하나 변경 됨');
    },[num,active])

    function clickHandler(){
        console.log('클릭함');
        // 상태 변경
        // 상태 값을 사용하는 이유 : 이전 상태 값을 보관하는데 
        setNum(num + 1);
        count++;
        console.log('변수',count);
        // console.log('상태',num);
        // 실수가 많이 발생하므로 주의
        // 상태 값을 변경하고 바로 적용되는게 아니기 때문에 잘 고려해야 한다.
    }

    function activeHandler(){
        setActive(!active);
    }

    return (
        <div>
            <button onClick={clickHandler}>클릭</button>
            <button onClick={activeHandler}>활성화/비활성화</button>
        </div>
    )
}

export default Mycom3