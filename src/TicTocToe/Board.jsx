import React, { useState } from 'react'
import Square from './Square'

function Board() {
    const [squareVal, setSquareVal] = useState(Array(9).fill(null))
    const [isXTurn, setIsXTurn] = useState(true)
    const player1 = "Deepak"
    const player2 = "Darsh"
    function checkWinner() {
        const possibleSet = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
        for (let logic of possibleSet) {
            const [a, b, c] = logic;
            console.log(squareVal[a]);
            if (squareVal[a] !== null && squareVal[a] === squareVal[b] && squareVal[a] === squareVal[c]) {
                return squareVal[a] == 'X' ? player1 : player2;
            }
        }
        return false;
    }
    const getWinner = checkWinner();

    const clickHandle = (index) => {
        if (squareVal[index] !== null) return;
        const copySquareVal = { ...squareVal }
        copySquareVal[index] = isXTurn ? 'X' : '0'
        setSquareVal(copySquareVal);
        setIsXTurn(!isXTurn)
    }
    const handleReset = () => {
        setSquareVal(Array(9).fill(null))
    }

    return (
        <div className='board-containter'>
            {getWinner ?
                (<>{getWinner} won the game {" "} <button onClick={handleReset}>Play Again</button></>) :
                (<>
                    <h2>{isXTurn ? 'X' : '0'}`s Turn</h2>
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
                </>)
            }
        </div>
    )
}

export default Board;