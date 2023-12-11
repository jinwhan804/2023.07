import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// 리덕스
// 스토어, 액션, 리듀서가 존재

// 스토어 : 상태가 관리되는 오직 하나의 공간. 컴포넌트와 별개로 store라는 공간이 있어서 필요한 상태값을 담아둔다.
// 컴포넌트에서 전역으로 상태값이 필요할 때 store에 접근해서 데이터를 가져온다.

// 액션 : 스토어에 전달할 데이터를 보낸다. 자바스크립트 객체 형식으로 만들어져 있다. dispatch 함수를 사용해서 매개 변수로 액션을 전달하면
// 리듀서 함수가 호출되면서 액션을 받는다.
// dispatch(액션) => 리듀서에 액션 전달

// 리듀서 : dispatch 함수로 전달 받은 액션을 보고 스토어에 상태를 업데이트 할지 여부 결정.

// 리덕스란 리액트에서 사용할 수 있는 하나의 라이브러리
// 리액트는 자식 컴포넌트에 props로 전달받은 값을 사용하는데 다른 컴포넌트와 데이터 공유를 직접하기 어려움

// 그래서 공유해야할 데이터를 공유 받는 자식 컴포넌트들이 사용할 때 공통적 부모 store를 만들어서 데이터 공유가 가능하도록 만들어준다.
// 리액트의 데이터 흐름이 단방향이라는 단점을 보안하기 위해 만들어졌다.

// 리덕스 개념이 어렵지만 데이터 적용이 편리하다.
// 간단히 말해 데이터를 부모 컴포넌트에 직접 받는게 아니라 따로 전용 컴포넌트에 값을 요청하고 전달할 수 있게 된다.
// 스토어에 있는 데이터를 변수에 값을 넣는 것처럼 바로 바꿀 수는 없고 dispatch라는 함수를 사용하여 전달해 준다.

// 리덕스의 동작 구조
// 컴포넌트 -> useDispatch -> Action -> Reducer -> store
// 컴포넌트가 Action을 보내고 Reducer가 전달 받아 업데이트할지 여부 확인한 후 store의 값을 최신화 시켜준다.
// Action은 동작할 기능 행동
// Reducer 함수를 실행해서 내가 동작할 기능을 조건문으로 작성해둔 파일
// 컴포넌트가 어떤 Action을 실행시킬지 Reducer 함수로 받고 store의 값을 최신화 시켜준다.
// store의 값이 바뀌면 전역 산태를 가져오고 있는 컴포넌트들을 리덴더링한다.

// 설치 명령어
// npm i redux
// npm i react-redux
