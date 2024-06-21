import Table from 'react-bootstrap/Table';
import React, { useEffect } from 'react';
import useStore from '../store';
import axiosInstance from '../api/axiosInstance';
import BasketWraper from '../ui/BasketWraper';

export default function Basket() {
  const setBasket = useStore((state) => state.setBasket);
  const setCards = useStore((state) => state.setCards);
  // const cards = useStore((state) => state.cards);
  useEffect(() => {
    axiosInstance.get('/basket').then((res) => setBasket(res.data));
  }, [setBasket]);

  const deleteHandler = (id) => {
    console.log('id-----', id)
    axiosInstance.delete(`/basket/${id}`).then(() => {
      setCards((data) => data.filter((el) => el.id !== id));
      axiosInstance.get('/basket').then((res) => setBasket(res.data));
    });
  };
  return (
    <Table striped="columns">
      <BasketWraper deleteHandler={deleteHandler} />
    </Table>
  );
}
