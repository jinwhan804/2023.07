import './App.css';
import Block from './Components/Block';
import {img01,img02,img03} from './Image'
import { useEffect, useState } from 'react';
// 가위바위보 생성
// 플레이어 1, 컴퓨터 1
// 컴퓨터는 랜덤 제시
// 플레이어는 선택
// 승패 표기 되게
function App() {
  // 컴퓨터와 유저가 사용할 가위바위보 객체 생성 필요
  // 선택값 저장용 객체 필요
  // 선택 값을 저장해 두면 동작 프로그램 작성 시 객체 안의 값을 판단하기 쉬움

  // 컴퓨터와 플레이어가 가위바위보 중 선택한 값을 사용하기 위해 데이터를 모아두는 객체
  const select = {
    rock : {
      name : '바위',
      img : img01
    },
    scissors : {
      name : '가위',
      img : img02
    },
    paper : {
      name : '보',
      img : img03
    }
  };

  // 유저가 선택한 데이터을 주시. 선택하면 데이터 변경
  // 유저 선택 useState
  const [userSelect,setUserSelect] = useState(null);
  // 컴퓨터 선택 useState
  const [comSelect,setComSelect] = useState(null);
  // 승패 결과를 담을 useState
  const [result,setResult] = useState('');

  function UserClick(_select){
    // 선택한 객체를 상태 변수에 담는다
    setUserSelect(select[_select]);

    // 플레이어 선택 후 컴퓨터 선택 진행
    // 컴퓨터는 랜덤 선택
    let arr = Object.keys(select);
    // 객체의 키 값만 불러와서 배열화
    console.log(arr);
    let comRandom = Math.floor(Math.random() * 3);

    setComSelect(select[arr[comRandom]]);

    let player = select[_select];
    let com = select[arr[comRandom]];

    if(player.name === com.name){
      setResult('무승부');
    }else if(player.name == '가위'){
      let res = com.name == '보' ? '승' : '패';
      setResult(res);
    }else if(player.name == '바위'){
      let res = com.name == '가위' ? '승' : '패';
      setResult(res);
    }else{
      let res = com.name == '바위' ? '승' : '패';
      setResult(res);
    }
  }

  useEffect(()=>{
    console.log(userSelect);
    console.log(comSelect);
  },[userSelect,comSelect])

  return (
    <>
      <div className="App">
        <Block data={userSelect} name={'유저'} result={result}/>
        <Block data={comSelect} name={'컴퓨터'} result={result}/>
      </div>
      <div>
        <button onClick={()=>{UserClick('scissors')}}>가위</button>
        <button onClick={()=>{UserClick('rock')}}>바위</button>
        <button onClick={()=>{UserClick('paper')}}>보</button>
      </div>
    </>
  );
}

export default App;
