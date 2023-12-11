import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import LoginBox from './Components/layout/loginBox';
import { weather,logins } from './middlewares';
import { useEffect, useState } from 'react';

function App() {
  const dispatch = useDispatch();
  const [name,setName] = useState('');
  const [id,setId] = useState('');
  const [pw,setPw] = useState('');
  // 전역 상태에 접근할 때 리듀서를 여러 개 사용할 경우 객체의 키 값에 해당하는 리듀서 키 값을 사용해야 한다.
  const isLogin = useSelector(state => state.login.isLogin);
  const userName = useSelector(state => state.login.id);
  const weatherData = useSelector(state => state.weather.weatherData);

  const login = ()=>{
    dispatch(logins.Login(id,pw));
  }

  const logout = ()=>{
    dispatch(logins.Logout());
  }

  const getWeather = ()=>{
    dispatch(weather.GetWeather(name));
  }

  useEffect(()=>{
    console.log(weatherData);
  },[weatherData])

  useEffect(()=>{
    console.log(id);
    console.log(pw);
  },[id,pw])

  return (
    <div className="App">
      {/* <LoginBox></LoginBox> */}
      <label>도시 이름</label>
      <input onChange={(e)=>{setName(e.target.value)}}></input><br/>
      <button onClick={getWeather}>날씨 검색</button>
      
      <div>여기는 {weatherData && weatherData.data?.name} 날씨는 {weatherData && weatherData.data?.weather[0].main}</div><br/>

      <label>ID</label>
      <input onChange={(e)=>{setId(e.target.value)}}></input><br/>
      <label>PW</label>
      <input onChange={(e)=>{setPw(e.target.value)}}></input><br/>
      <button onClick={login}>로그인</button><br/>

      <div>로그인 됨?</div>{isLogin ? <>{userName} 유저 로그인 <button onClick={logout}>로그 아웃</button></> : <>로그인 안 됨</>}
    </div>
  );
}

export default App;

// api 가져와서 store의 상태값을 바꿀 때 비동기 처리를 위해 미들웨어 추가가 필요하다.

// 스타일 컴포넌트를 사용하면 클래스 명이 겹치지 않는다.
// 스타일 관련 props 값을 전달해 적용시킬 수 있다.
// SCSS
// styled-components

// redux-thunk
// api를 요청하고 처리 완료 후 함수 상태를 업데이트하기 위해 dispatch를 지연시킨다.

// 미들 웨어 추가하는 방법
// dispatch 함수를 실핼할 때 매개 변수로 객체를 넘기는가 함수를 넘기는가 차이가 발생.

// 날씨 api 사용

// thunk가 해주는 역할 : Action Createors라는 함수를 만들어주는 것
// Action Createors는 함수를 반환한다.
// dispatch를 딜레이 시켜주는 역할

// npm start : 개발할 때 사용하는 명령어. 개발 시 확인용
// npm run build : 빌드된 파일을 배포하는 것.