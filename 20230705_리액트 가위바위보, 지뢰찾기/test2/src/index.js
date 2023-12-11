import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';

// 리액트에서 페이지를 다양하게 보여주는 방법
// 페이지를 컴포넌트로 구성해서 하위 컴포넌트를 모아서 페이지 형태로 구색을 맞춰서 브라우저에 표시한다.
// 페이지가 전환된다는 것은 페이지 컴포넌트를 조건마다 바꿔서 보여주는 것
// 브라우저가 새로고침 되지 않고 내용만 교체되는 구조
// 조건은 브라우저의 url에 따라 페이지 컴포넌트를 맞춰서 보여준다.
// 이를 위해 필요한 라이브러리 : 리액트 라우터
// https://reactrouter.com/en/v6.3.0 : 공식 홈페이지

// 리액트 라우터 설치 명령어 : npm i react-router-dom@6 (뒤의 번호는 버전 번호)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
