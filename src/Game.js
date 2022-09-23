import React, { useState } from 'react';
import GameOngoing from './Components/GameOngoing/GameOngoing';
import GameOver from './Components/GameOver/GameOver';
import GameStart from './Components/GameStart/GameStart';

const Game = () => {
  const [gameMode, setGameMode] = useState('');
  const [gameOver, setGameOver] = useState(false);
  const [gameScore, setGameScore] = useState(0);
  const [gameHighestScore, setGameHighestScore] = useState(0);

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
          gameStartWindowIsMounted={gameStartWindowIsMounted}
          gameOngoingIsMounted={gameOngoingIsMounted}
          setGameOngoingIsMounted={setGameOngoingIsMounted}
          gameMode={gameMode}
          setGameMode={setGameMode}
          gameScore={gameScore}
          setGameScore={setGameScore}
          gameHighestScore={gameHighestScore}
          setGameHighestScore={setGameHighestScore}
          gameOver={gameOver}
          setGameOver={setGameOver}
        />
      ) : (
        <GameOver />
      )}
    </div>
  );
};

export default Game;
