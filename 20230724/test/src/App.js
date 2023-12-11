import './App.css';
import {produce} from 'immer';
import {add, remove,add1,remove1,temp} from './features/countSlice';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const num = useSelector(state => state.count.num);
  const num1 = useSelector(state => state.count1.num);
  const value = useSelector(state => state.count1.value);

  const state = {
    value : 0,
    arr : []
  }

  // 값이 변해도 바뀐 것을 감지하지 못하게 때문에 사용
  // 기존 값을 수정하지 않고 새로운 값을 만들어 내는 것
  const nextState = produce(state, dra => {
    console.log(dra);
    dra.value += 1;
    dra.arr.push('a');
  })

  // 기존 객체
  console.log('state',state);
  // 새로운 객체
  console.log('nextState',nextState);

  // 기존 객체를 유지하고 새로운 값을 생성하여 반환

  return (
    <div className="App">
      <div>
        숫자1 : {num}
        <button onClick={()=>{dispatch(add())}}>더하기</button>
        <button onClick={()=>{dispatch(remove())}}>빼기</button>
      </div>
      <div>
        로딩 완료 여부 : {value} <br/>
        숫자2 : {num1}
        <button onClick={()=>{dispatch(temp('seoul'))}}>날씨 정보 가져오기</button>
        <button onClick={()=>{dispatch(add1())}}>더하기</button>
        <button onClick={()=>{dispatch(remove1())}}>빼기</button>
      </div>
    </div>
  );
}

export default App;
