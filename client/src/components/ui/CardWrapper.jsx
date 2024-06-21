import React from 'react';
import { StyledRow } from '../styled/StyledRow';
import Card from './Card';
import '../styleCSS/CardWrapper.css';
import useStore from '../store';

export default function CardWrapper({ cardSubmitHandler }) {
  const cards = useStore((state) => state.cards);
  return (
    <StyledRow className="mt-3">
      <h1>Magic Cards:</h1>
      {cards.map((card) => (
        <Card cardSubmitHandler={cardSubmitHandler} key={card.id} card={card} />
      ))}
    </StyledRow>
  );
}
