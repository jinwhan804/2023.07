import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

// 미들웨어 추가 : applyMiddleware를 넣어주고 여기에 사용할 미들웨어를 매개 변수로 넣어 준다.

export default createStore(reducer,applyMiddleware(thunk));