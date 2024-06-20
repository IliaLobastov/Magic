import React from 'react';
import { StyledRow } from '../styled/StyledRow';
import MyCard from './MyCard';

export default function BasketWraper({ basket }) {
  return (
    <StyledRow className="mt-3">
      <h1>Корзина</h1>
      {basket.map((card) => (
        <MyCard key={card.id} card={card} />
      ))}
    </StyledRow>
  );
}
