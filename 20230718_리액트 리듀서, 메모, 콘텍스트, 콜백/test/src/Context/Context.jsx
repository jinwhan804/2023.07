import React,{createContext,useContext, useState} from 'react';

// useContext : react에서 제공하는 제공하는 내장 hook 함수이다
// 전역 상태 관리를 도와주는 함수
// react는 데이터의 흐름이 단방향이라 부모에서 자식으로만 전달되어 불편하다.
// props로 데이터를 넘겨주지 않아도 컴포넌트들이 데이터를 공유할 수 있도록 도와준다.

const Global = createContext();
// createContext를 호출하여 Global 객체 생성, context 객체 생성

const Context01 = ()=>{
    return(
        <Context02></Context02>
    )
}

const Context02 = ()=>{
    // Global.Provider value로 전달한 값을 받기 위해
    // useContext()의 매개 변수로 context 객체를 전달한다.
    const {name,setName} = useContext(Global);
    
    return(
        <>
            내 이름은 {name}
            <button onClick={()=>{setName('koo2')}}>변경</button>
        </>
    )
}

const Context = () => {
    // Context가 최상단 부모 컴포넌트
    // 부모의 상태 변수
    const [name,setName] = useState('koo');
    // 부모의 상태 변수와 상태 변수 업데이트 함수를 객체에 전달
    const obj = {
        name,
        setName
    }

    return (
        // 전역 상태 관리 시 Global.Provider로 최상단 트리를 감싸준다
        // value는 정해진 키 값으로 전달할 데이터를 넣어준다.(전역 상태)
        <Global.Provider value={obj}>
            <Context01></Context01>
        </Global.Provider>
    )
}

export default Context