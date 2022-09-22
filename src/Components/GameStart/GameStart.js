import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import React from 'react';
import logo from '../../Files/logo.png';
import GameModeButtons from '../AtomicComponents/GameModeButtons/GameModeButtons';

import { defaultTheme } from '../themes';
import './GameStart.css';

import '@fontsource/roboto/700.css';

const GameStart = (props) => {
  return (
    <>
      {props.gameStartWindowIsMounted === true ? (
        <div className="gamestart flex flex-col items-center justify-center">
          <div className="gamestart__logocontainer mb-8 h-32 flex justify-center items-center">
            <img src={logo} alt="" className="h-28" />
            <ThemeProvider theme={defaultTheme}>
              <Typography
                variant="h1"
                color="primary"
                sx={{ fontSize: '19px', marginLeft: '-10px' }}
              >
                Harry Potter's
                <span className="text-white text-3xl block"> Memory Game</span>
              </Typography>
            </ThemeProvider>
          </div>
          <h2 className="text-white text-xl mb-4 mt-8">Choose a game mode:</h2>
          <div className="gamestart__modescontainer mb-8">
            {<GameModeButtons {...props} />}
          </div>
          <ThemeProvider theme={defaultTheme}>
            <Button
              variant="contained"
              className="gamestart__startbtn"
              sx={{
                fontSize: '20px',
                padding: ' 5px 50px',
                borderRadius: '50px',
                marginTop: '50px',
              }}
              onClick={() => {
                if (!props.gameMode) return;
                props.setGameStartWindowIsMounted(false);
                props.setGameOngoingIsMounted(true);
              }}
            >
              Start
            </Button>
          </ThemeProvider>
        </div>
      ) : null}
    </>
  );
};

export default GameStart;
