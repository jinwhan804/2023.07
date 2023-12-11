import React from 'react'
import Squares from './Squares'

const Lines = ({lineData, setGameOver, setGameCount, gameCount}) => {
    let square1 = lineData[0];
    let square2 = lineData[1];
    let square3 = lineData[2];

    return (
        <li>
            <Squares squareData={square1} setGameOver={setGameOver} setGameCount={setGameCount} gameCount={gameCount}/>
            <Squares squareData={square2} setGameOver={setGameOver} setGameCount={setGameCount} gameCount={gameCount}/>
            <Squares squareData={square3} setGameOver={setGameOver} setGameCount={setGameCount} gameCount={gameCount}/>
        </li>
    )
}

export default Lines