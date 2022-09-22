import { ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import React from 'react';
import logo from '../../Files/logo.png';
import GameModeButtons from '../AtomicComponents/GameModeButtons/GameModeButtons';
import './GameNav.css';

import { defaultTheme } from '../themes';

const GameNav = (props) => {
  return (
    <nav className="nav flex justify-between items-center px-32 py-5">
      <ThemeProvider theme={defaultTheme}>
        <div className="nav__logo flex justify-center items-center">
          <img src={logo} alt="" className="h-12" />
          <Typography
            variant="h1"
            color="primary"
            sx={{ fontSize: '10px', marginLeft: '0px' }}
          >
            Harry Potter's
            <span className="text-white text-lg block"> Memory Game</span>
          </Typography>
        </div>
        <div className="grid nav__buttons">
          <Typography
            className="nav__switchmode"
            variant="p"
            color="primary"
            sx={{ fontSize: '18px' }}
          >
            Switch game mode:
          </Typography>
          {
            <GameModeButtons
              isFor="ongoing"
              gameMode={props.gameMode}
              setGameMode={props.setGameMode}
              setCardsAreMounted={props.setCardsAreMounted}
              updateGameColorandCardsArr={props.updateGameColorandCardsArr}
            />
          }
        </div>
        <div className="nav__score">
          <Typography variant="p" color="primary" sx={{ fontSize: '18px' }}>
            Score:
          </Typography>
          <p className="text-white text-sm">Highest score:</p>
          <p className="text-white text-sm">Current score:</p>
        </div>
      </ThemeProvider>
    </nav>
  );
};

export default GameNav;
