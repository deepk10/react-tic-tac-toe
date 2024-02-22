import React, { useState } from 'react'
import Square from './Square'

function Board() {
    const [squareVal, setSquareVal] = useState(Array(9).fill(null))
    const [isXVal, setIsXVal] = useState(true)
    const clickHandle = (index) => {
        const copySquareVal = { ...squareVal }
        copySquareVal[index] = isXVal ? 'X' : '0'
        setSquareVal(copySquareVal);
        setIsXVal(isXVal ? false : true)
    }
    return (
        <div className='board-containter'>
            <div className="board-row">
                <Square onClick={() => clickHandle(0)} value={squareVal[0]} />
                <Square onClick={() => clickHandle(1)} value={squareVal[1]} />
                <Square onClick={() => clickHandle(2)} value={squareVal[2]} />
            </div>
            <div className="board-row">
                <Square onClick={() => clickHandle(3)} value={squareVal[3]} />
                <Square onClick={() => clickHandle(4)} value={squareVal[4]} />
                <Square onClick={() => clickHandle(5)} value={squareVal[5]} />
            </div>
            <div className="board-row">
                <Square onClick={() => clickHandle(6)} value={squareVal[6]} />
                <Square onClick={() => clickHandle(7)} value={squareVal[7]} />
                <Square onClick={() => clickHandle(8)} value={squareVal[8]} />
            </div>
        </div>
    )
}

export default Board;