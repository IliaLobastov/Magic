import Table from 'react-bootstrap/Table';
import React, { useEffect } from 'react';
import useStore from '../store';
import axiosInstance from '../api/axiosInstance';
import BasketWraper from '../ui/BasketWraper';

export default function Basket() {
  const setBasket = useStore((state) => state.setBasket);
  const setCards = useStore((state) => state.setCards);

  useEffect(() => {
    axiosInstance.get('/basket').then((res) => setBasket(res.data));
  }, []);

  const deleteHandler = (id) => {
    console.log('----id', typeof id);
    axiosInstance.delete(`/basket/${id}`).then(() => {
      setCards((data) => data.filter((el) => el.id !== id));
    });
  };

  return (
    <Table striped="columns">
      <BasketWraper deleteHandler={deleteHandler} />
    </Table>
  );
}
