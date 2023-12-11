import React, { useState } from 'react'

const Squares = ({squareData, setGameOver, setGameCount, gameCount}) => {
  const [temp,setTemp] = useState(null);

  const bombCheck = ()=>{
    if(squareData.state == "danger"){
      setGameOver(true);
    }else{
      console.log(gameCount);
      gameCount++;
      console.log(gameCount);
      setGameCount(gameCount);
    }

    setTemp(squareData.img);
  }

  return (
    <div onClick={bombCheck}>
      <img src={temp} alt="" />
    </div>
  )
}

export default Squares