'use client'

import { useState } from "react";

const Board = () => {
    const [squares, setSquares] = useState(Array(9).fill(null));

    function handleClick(i:number) {
        let nextSquares = squares.slice()
        nextSquares[i] = 'X'
        setSquares(nextSquares)
    }
    return (
        <>
            <div>
                <Square value={squares[0]} handleClick={()=>handleClick(0)} />
                <Square value={squares[1]} handleClick={()=>handleClick(1)} />
                <Square value={squares[2]} handleClick={()=>handleClick(2)} />
            </div>
            <div>
                <Square value={squares[3]} handleClick={()=>handleClick(3)} />
                <Square value={squares[4]} handleClick={()=>handleClick(4)} />
                <Square value={squares[5]} handleClick={()=>handleClick(5)} />
            </div>
            <div>
                <Square value={squares[6]} handleClick={()=>handleClick(6)} />
                <Square value={squares[7]} handleClick={()=>handleClick(7)} />
                <Square value={squares[8]} handleClick={()=>handleClick(8)} />
            </div>
        </>
    )
}

const Square = ({value, handleClick})=>{
    return (
        <button
            onClick={handleClick}
            style={{
                width: '50px',
                height: '50px',
                verticalAlign: 'middle',
                fontSize: '20px',
                border: '1px solid white',
            }}
            >{value}</button>
    )
}

export default () => {
    return (
        <>
        <div><p>game page</p></div>
        <Board />
        </>
    )
};