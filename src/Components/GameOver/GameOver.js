import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import React, { useEffect } from 'react';
import logo from '../../Files/logo.png';
import { defaultTheme } from '../themes';
import './GameOver.css';

import {
  allCardsArr,
  gryffindorCardsArr,
  hufflepuffCardsArr,
  ravenclawCardsArr,
  slytherinCardsArr,
} from '../AtomicComponents/Cards/cardsArrays';

const GameOver = (props) => {
  let allGameCardsArr = [
    allCardsArr,
    gryffindorCardsArr,
    hufflepuffCardsArr,
    ravenclawCardsArr,
    slytherinCardsArr,
  ];
  useEffect(() => {
    allGameCardsArr.forEach((cardArr) =>
      cardArr.forEach((card) => (card.wasClicked = false))
    );
    if (props.gameScore > props.gameHighestScore)
      props.setGameHighestScore(props.gameHighestScore + 1);
  }, []);
  return (
    <>
      <div className="gameover flex flex-col items-center justify-center">
        <ThemeProvider theme={defaultTheme}>
          <div className="gameover__logocontainer mb-8 h-32 flex justify-center items-center">
            <img src={logo} alt="" className="h-28" />
            <Typography
              variant="h1"
              color="primary"
              sx={{ fontSize: '19px', marginLeft: '-10px' }}
            >
              Harry Potter's
              <span className="text-white text-3xl block"> Memory Game</span>
            </Typography>
          </div>

          <div className="nav__score text-center">
            <Typography variant="p" color="primary" sx={{ fontSize: '18px' }}>
              Score:
            </Typography>
            <p className="text-white text-sm">
              Highest score: {props.gameHighestScore}
            </p>
            <p className="text-white text-sm">
              Current score: {props.gameScore}
            </p>
          </div>

          <div className="gameover__restartbtn">
            <Button
              variant="contained"
              className="gameover__restartbtn"
              sx={{
                fontSize: '20px',
                padding: ' 5px 50px',
                borderRadius: '50px',
                marginTop: '50px',
              }}
              onClick={() => {
                props.setGameStartWindowIsMounted(false);
                props.setGameOngoingIsMounted(true);
                props.setGameScore(0);
                props.setGameOver(false);
              }}
            >
              Restart
            </Button>
          </div>
        </ThemeProvider>
      </div>
    </>
  );
};

export default GameOver;
