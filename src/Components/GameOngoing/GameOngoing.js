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
  useEffect(() => {
    if (props.gameStartWindowIsMounted === false) {
      props.setGameOngoingIsMounted(true);
    }
  }, [props.gameStartWindowIsMounted]);

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

  const [gameCards, setGameCards] = useState(null);
  const createCards = () => {
    return cardsArr.map((card) => (
      <div
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
            if (props.gameOver) return;
            card.wasClicked = true;
          }}
        />
        <div className="card__shadow"></div>
      </div>
    ));
  };

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
  const [cardsAreMounted, setCardsAreMounted] = useState(true);
  useEffect(() => setGameCards(createCards()), []);
  useEffect(() => {
    props.setGameMode(props.gameMode);
    updateGameColorandCardsArr();
    //setGameCards(createCards());
  });

  useEffect(() => {
    if (!cardsAreMounted) setCardsAreMounted(true);
  }, [cardsAreMounted]);
  return (
    <div className="gamecontainer">
      <GameNav
        gameMode={props.gameMode}
        setGameMode={props.setGameMode}
        gameHighestScore={props.gameHighestScore}
        setCardsAreMounted={setCardsAreMounted}
        updateGameColorandCardsArr={updateGameColorandCardsArr}
      />
      <div className="m-10">
        {cardsAreMounted ? (
          <Cards
            gameCards={gameCards}
            setGameCards={setGameCards}
            createCards={createCards}
            cardsAreMounted={cardsAreMounted}
          />
        ) : null}
      </div>
      <button className="text-white" onClick={() => console.log(gameCards)}>
        test
      </button>
    </div>
  );
};

export default GameOngoing;
