import React, { useEffect } from 'react';
import './Cards.css';

const Cards = (props) => {
  useEffect(() => {
    return () => props.setGameCards(props.createCards());
  }, [props.cardsAreMounted]);
  useEffect(() => {
    return () => props.setCardsAreMounted(true);
  }, [props.gameScore]);
  return (
    <div className="cards__container grid grid-cols-4">{props.gameCards}</div>
  );
};

export default Cards;
