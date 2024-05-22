import React, { useState, useEffect } from 'react';
import './Games.css';

function Games() {
    const [player, setPlayer] = useState('🚜');
    const [board, setBoard] = useState(Array(9).fill(''));
    const [gameEnded, setGameEnded] = useState(false);

    const handleMove = (index) => {
        if (!gameEnded && board[index] === '') {
            const newBoard = [...board];
            newBoard[index] = player;
            setBoard(newBoard);
            const winner = checkWinner(newBoard);
            if (winner) {
                setGameEnded(true);
            } else {
                setPlayer(player === '🚜' ? '🏗️' : '🚜');
            }
        }
    };

    const restartGame = () => {
        setPlayer('🚜');
        setBoard(Array(9).fill(''));
        setGameEnded(false);
    };

    const checkWinner = (currentBoard) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (currentBoard[a] && currentBoard[a] === currentBoard[b] && currentBoard[a] === currentBoard[c]) {
                return currentBoard[a];
            }
        }
        return null;
    };

    const allCellsFilled = () => {
        return board.every(cell => cell !== '');
    };

    useEffect(() => {
        if (allCellsFilled() && !gameEnded) {
            setGameEnded(true);
        }
    }, [board, gameEnded]);

    const renderStatus = () => {
        const winner = checkWinner(board);
        if (winner) {
            return `Winner: ${winner}`;
        } else if (allCellsFilled()) {
            return `It's a draw!`;
        } else {
            return `Next player: ${player}`;
        }
    };

    const renderCell = (index) => (
        <div className="cell" onClick={() => handleMove(index)}>
            {board[index]}
        </div>
    );

    return (
        <div className="games">
            <div className="title">
                <h><b>Games</b></h>
            </div>
            <hr />
            <div className="board">
                {board.map((cell, index) => renderCell(index))}
            </div>
            <div className="status">{renderStatus()}</div>
            {(gameEnded || allCellsFilled()) && <button className="restart-button" onClick={restartGame}>Restart</button>}
        </div>
    );
}

export default Games;