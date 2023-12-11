// redux 라이브버리 함수 중 리듀서 함수를 합쳐주는 함수가 존재한다.
// conbineReducers() : 함수에 매개변수로 전달하면 합쳐준다.
import { combineReducers } from "redux";
import login from './login';
import weather from './weather';

// 매개변수로 합치고자하는 리듀서 함수들을 객체로 전달한다.
const rootReducer = combineReducers({login,weather});

export default rootReducer;