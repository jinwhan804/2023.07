// 저장소 만들기
import {createStore} from 'redux';
import reducer from './reducer';
import {composeWithDevTools} from 'redux-devtools-extension'

// createStore 메소드 반환값으로 저장소 생성
// 메소드의 매개 변수로 작성한 reducer 전달
let store = createStore(reducer,composeWithDevTools());

export default store;