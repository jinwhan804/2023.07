import { useEffect, useState } from 'react';
import './App.css';
import Plane from './Components/Plane';
import { imgBomb } from './Image';

function App() {
  let bombRandom = [];

  const bombState = {
    safe : {
      state : 'safe',
      img : ' ',
    },
    danger : {
      state : 'danger',
      img : imgBomb,
    }
  }

  let bomb = [];

  const bombDefault = [0,0,0,0,0,0,0,0,0];
  // 게임오버
  const [gameOver,setGameOver] = useState(false);
  // 게임 카운트
  const [gameCount,setGameCount] = useState(0);
  const [bombLocation,setBombLocation] = useState(bombDefault);

  useEffect(()=>{
    console.log(bombLocation);
    
  },[bombLocation])

  useEffect(()=>{
    if(gameOver){
      alert("게임 오버");
    }else if(gameCount >= 6){
      alert('게임 성공');
    }
  },[gameOver,gameCount])
  const BombSelect = ()=>{
    for (let i = 0; i < 3; i++) {
      let num = Math.floor(Math.random() * 9);

      if(bombRandom.includes(num)){
        i--;
        continue;
      }else{
        bombRandom.push(num);
      }      
    }

    let select = [];

    for (let i = 0; i < bombDefault.length; i++) {
      for (let a = 0; a < bombRandom.length; a++) {
        if(i === bombRandom[a]){
          select[i] = 1;
        }                
      }

      if(select[i] !== 1){
        select[i] = 0;
      }
    }    

    for (let i = 0; i < select.length; i++) {
      if(select[i] === 0){
        bomb.push(bombState.safe);
      }else{
        bomb.push(bombState.danger);
      }      
    }

    setBombLocation(bomb);
  }

  return (
    <>
      <div className="App">
        <Plane data={bombLocation} setGameOver={setGameOver} setGameCount={setGameCount} gameCount={gameCount}/>
        <button onClick={BombSelect}>게임 시작</button>
      </div>
    </>
  );
}

export default App;
