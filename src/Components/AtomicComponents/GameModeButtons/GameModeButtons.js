import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import uniqid from 'uniqid';
import { allGameThemes } from '../../themes';

const GameModeButtons = (props) => {
  const modeButtonsArr = [
    {
      theme: allGameThemes[0],
      text: 'All houses',
      gameModeOption: 'All houses',
    },
    {
      theme: allGameThemes[1],
      text: 'Hufflepuff',
      gameModeOption: 'Hufflepuff',
    },
    {
      theme: allGameThemes[2],
      text: 'Ravenclaw',
      gameModeOption: 'Ravenclaw',
    },
    {
      theme: allGameThemes[3],
      text: 'Gryffindor',
      gameModeOption: 'Gryffindor',
    },
    {
      theme: allGameThemes[4],
      text: 'Slytherin',
      gameModeOption: 'Slytherin',
    },
  ];
  let modeButtons = modeButtonsArr.map((btn) => {
    return (
      <ThemeProvider theme={btn.theme} key={uniqid()}>
        {props.isFor === 'ongoing' ? (
          <Button
            variant={
              btn.gameModeOption === props.gameMode ? 'contained' : 'outlined'
            }
            className="gamestart__housebtn"
            onClick={() => {
              props.resetCardsArr();
              props.setGameMode(btn.gameModeOption);
              props.updateGameColorandCardsArr();
              props.setCardsAreMounted(false);
            }}
          >
            {btn.text}
          </Button>
        ) : (
          <Button
            variant={
              btn.gameModeOption === props.gameMode ? 'contained' : 'outlined'
            }
            className="gamestart__housebtn"
            onClick={() => {
              props.setGameMode(btn.gameModeOption);
            }}
          >
            {btn.text}
          </Button>
        )}
      </ThemeProvider>
    );
  });
  return <>{modeButtons}</>;
};

export default GameModeButtons;
