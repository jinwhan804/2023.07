import React from 'react'
import Lines from './Lines'

const Plane = ({data, setGameOver, setGameCount, gameCount}) => {
    let line1 = [];
    let line2 = [];
    let line3 = [];

    data.forEach((el,index) => {
        if(index < 3){
            line1.push(el);
        }else if(index >= 3 && index < 6){
            line2.push(el);
        }else{
            line3.push(el);
        }
    });

    return (
        <ul>
            <Lines lineData={line1} setGameOver={setGameOver} setGameCount={setGameCount} gameCount={gameCount}/>
            <Lines lineData={line2} setGameOver={setGameOver} setGameCount={setGameCount} gameCount={gameCount}/>
            <Lines lineData={line3} setGameOver={setGameOver} setGameCount={setGameCount} gameCount={gameCount}/>
        </ul>
    )
}

export default Plane