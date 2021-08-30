import React, { useState } from 'react'
import { calculateWinner } from '../helpers'
import Board from './Board'

const style = {
    width: '200px',
    margin: '20px auto'
}

const Game = () => {

    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [xNext, setXNext] = useState(true);
    const [stepNumber, setStepNumber] = useState(0);
    const winner = calculateWinner(history[stepNumber]);

    const handleClick = i => {
        const timeTravel = history.slice(0, stepNumber + 1);
        const current = timeTravel[stepNumber];
        const squares = [...current];

        if (winner || squares[i]) return;

        squares[i] = xNext ? 'X' : 'O';
        setHistory([...timeTravel, squares]);
        setStepNumber(timeTravel.length);
        setXNext(!xNext);
    }

    const goTo = step => {
        setStepNumber(step);
        setXNext(step % 2 === 0)
    };

    const nextMove = () => (
        history.map((_step, move) => {
            const destination = move ? `Total # of moves: ${move}` : 'New Game';
            return (
                <li key={move}>
                    <button onClick ={() => goTo(move)}>{destination}</button>
                </li> 
        )
    })
)

    return (
        <>
        <Board squares={history[stepNumber]} onClick={handleClick} />
        <div style={style}>
            <p>{winner ? 'Winner: ' + winner : 'Next Player:' + (xNext ? 'X' : 'O')}</p>
            {nextMove()}
        </div>
        </>
    )
}

export default Game;