import React, { useState } from 'react';
import { StyledRow } from '../styled/StyledRow';
import Card from './Card';
import '../styleCSS/CardWrapper.css';
import useStore from '../store';

export default function CardWrapper({ submitCardHandler }) {
  const cards = useStore((state) => state.cards);
  console.log('----', typeof cards);
  return (
    <StyledRow className="mt-3">
      <h1 style={{ color: "#FF6347" }}>Magic Cards:</h1>
      {cards.map((card) => (
        <Card submitCardHandler={submitCardHandler} key={card.id} card={card} />
      ))}
    </StyledRow>
  );
}
