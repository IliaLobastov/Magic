import React from 'react';
import { StyledRow } from '../styled/StyledRow';
import MyCard from './MyCard';
import useStore from '../store';

export default function BasketWraper({deleteHandler}) {
  const basket = useStore((store) => store.basket);
  console.log({ basket });
  return (
    <StyledRow className="mt-3">
      <h1>Basket</h1>
      {basket.map((card) => (
        <MyCard
          key={card.id}
          card={card}
          image={card.image}
          price={card.price}
          title={card.title}
          newCard={card.newCard}
          deleteHandler={deleteHandler}
        />
      ))}
    </StyledRow>
  );
}
