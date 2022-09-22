import React, { useState } from 'react';
import GameOngoing from './Components/GameOngoing/GameOngoing';
import GameOver from './Components/GameOver/GameOver';
import GameStart from './Components/GameStart/GameStart';

const Game = () => {
  const [gameMode, setGameMode] = useState('');
  const [gameOver, setGameOver] = useState(false);
  const [gameStartWindowIsMounted, setGameStartWindowIsMounted] =
    useState(true);
  const [gameOngoingIsMounted, setGameOngoingIsMounted] = useState(false);

  return (
    <div className="bg-gradient-to-t from-slate-900 to-slate-800">
      <GameStart
        gameMode={gameMode}
        setGameMode={setGameMode}
        gameStartWindowIsMounted={gameStartWindowIsMounted}
        setGameStartWindowIsMounted={setGameStartWindowIsMounted}
        setGameOngoingIsMounted={setGameOngoingIsMounted}
      />
      {!gameOver && gameOngoingIsMounted ? (
        <GameOngoing
          gameOver={gameOver}
          setGameOver={setGameOver}
          gameMode={gameMode}
          setGameMode={setGameMode}
          gameOngoingIsMounted={gameOngoingIsMounted}
          gameStartWindowIsMounted={gameStartWindowIsMounted}
          setGameOngoingIsMounted={setGameOngoingIsMounted}
        />
      ) : (
        <GameOver />
      )}
    </div>
  );
};

export default Game;
