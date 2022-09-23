import React, { useEffect, useState } from 'react';
import uniqid from 'uniqid';
import Cards from '../AtomicComponents/Cards/Cards';
import GameNav from '../GameNav/GameNav';
import './GameOngoing.css';

import {
  allCardsArr,
  allColors,
  gryffindorCardsArr,
  gryffindorColors,
  hufflepuffCardsArr,
  hufflepuffColors,
  ravenclawCardsArr,
  ravenclawColors,
  slytherinCardsArr,
  slytherinColors,
} from './../AtomicComponents/Cards/cardsArrays';

const GameOngoing = (props) => {
  const [cardsAreMounted, setCardsAreMounted] = useState(true);

  const [gameCards, setGameCards] = useState(null);

  const [cardsArr, setCardsArr] = useState(
    props.gameMode === 'Slytherin'
      ? slytherinCardsArr
      : props.gameMode === 'Ravenclaw'
      ? ravenclawCardsArr
      : props.gameMode === 'Hufflepuff'
      ? hufflepuffCardsArr
      : props.gameMode === 'Gryffindor'
      ? gryffindorCardsArr
      : allCardsArr
  );
  const [gameColorsObj, setGameColorsObj] = useState(
    props.gameMode === 'Slytherin'
      ? slytherinColors
      : props.gameMode === 'Ravenclaw'
      ? ravenclawColors
      : props.gameMode === 'Hufflepuff'
      ? hufflepuffColors
      : props.gameMode === 'Gryffindor'
      ? gryffindorColors
      : allColors
  );

  const updateGameColorandCardsArr = () => {
    setCardsArr(
      props.gameMode === 'Slytherin'
        ? slytherinCardsArr
        : props.gameMode === 'Ravenclaw'
        ? ravenclawCardsArr
        : props.gameMode === 'Hufflepuff'
        ? hufflepuffCardsArr
        : props.gameMode === 'Gryffindor'
        ? gryffindorCardsArr
        : allCardsArr
    );
    setGameColorsObj(
      props.gameMode === 'Slytherin'
        ? slytherinColors
        : props.gameMode === 'Ravenclaw'
        ? ravenclawColors
        : props.gameMode === 'Hufflepuff'
        ? hufflepuffColors
        : props.gameMode === 'Gryffindor'
        ? gryffindorColors
        : allColors
    );
  };

  const shuffleGameCards = () => {
    let cachedCardsArr = cardsArr.sort(() => (Math.random() > 0.5 ? 1 : -1));
    setCardsArr(cachedCardsArr);
    setGameCards(createCards());
  };

  const createCards = () => {
    return cardsArr.map((card) => (
      <div
        key={uniqid()}
        className="card__container"
        style={{
          boxShadow: `0px 0px 25px 1px ${gameColorsObj.primary}`,
          border: `3px solid ${gameColorsObj.primary}`,
        }}
      >
        <button
          key={uniqid()}
          style={{
            backgroundImage: `url(${card.img})`,
            backgroundSize: 'auto 110%',
            backgroundPosition: 'center',
            width: '174px',
            height: '250px',
            zIndex: '1',
          }}
          onClick={() => {
            // if (props.gameOver) return;
            updateOnCardClicked(card);
          }}
        />
        <div className="card__shadow"></div>
      </div>
    ));
  };

  const updateOnCardClicked = (card) => {
    console.log(props.gameOver);
    if (card.wasClicked) {
      props.setGameOver(true);
    }
    card.wasClicked = true;
    shuffleGameCards();
    props.setGameScore(props.gameScore + 1);
    setCardsAreMounted(false);
  };

  const resetCardsArr = () => {
    let updatedCards = cardsArr.map((card) => (card.wasClicked = false));
    setCardsArr(updatedCards);
  };

  useEffect(
    function updateGameModeColorAndCardsArr() {
      if (props.gameStartWindowIsMounted === false) {
        props.setGameOngoingIsMounted(true);
      }
    },
    [props.gameStartWindowIsMounted]
  );

  useEffect(function initializeCards() {
    setGameCards(createCards());
  }, []);

  useEffect(function updateModeColorAndCardsArr() {
    props.setGameMode(props.gameMode);
    updateGameColorandCardsArr();
  });

  useEffect(() => {
    props.setGameHighestScore(props.gameHighestScore);
    props.setGameScore(0);
  }, [props.gameMode]);

  useEffect(
    function remountCards() {
      if (props.gameScore > props.gameHighestScore)
        props.setGameHighestScore(props.gameHighestScore + 1);
      if (!cardsAreMounted) setCardsAreMounted(true);
    },
    [cardsAreMounted]
  );

  return (
    <div className="gamecontainer">
      <GameNav
        gameMode={props.gameMode}
        setGameMode={props.setGameMode}
        setCardsAreMounted={setCardsAreMounted}
        updateGameColorandCardsArr={updateGameColorandCardsArr}
        gameScore={props.gameScore}
        gameHighestScore={props.gameHighestScore}
        resetCardsArr={resetCardsArr}
      />
      <div className="m-10">
        {cardsAreMounted ? (
          <Cards
            gameCards={gameCards}
            setGameCards={setGameCards}
            createCards={createCards}
            cardsAreMounted={cardsAreMounted}
            setCardsAreMounted={setCardsAreMounted}
            gameScore={props.gameScore}
            gameHighestScore={props.gameHighestScore}
          />
        ) : null}
      </div>
      <button
        className="text-white"
        onClick={() => console.log(props.gameScore)}
      >
        test
      </button>
    </div>
  );
};

export default GameOngoing;
