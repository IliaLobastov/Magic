import React from 'react';
import { StyledRow } from '../styled/StyledRow';
import MyCard from './MyCard';
import useStore from '../store';

export default function BasketWraper() {
  const basket = useStore((store) => store.basket);
  console.log({ basket });
  return (
    <StyledRow className="mt-3">
      <h1>Корзина</h1>
      {basket.map((card) => (
        <MyCard key={card.id} card={card} />
      ))}
    </StyledRow>
  );
}
