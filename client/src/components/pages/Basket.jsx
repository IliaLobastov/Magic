import Table from 'react-bootstrap/Table';
import React, { useEffect } from 'react';
import useStore from '../store';
import axiosInstance from '../api/axiosInstance';
import BasketWraper from '../ui/BasketWraper';

export default function Basket() {
  const setBasket = useStore((state) => state.setBasket);
  const basket = useStore((state) => state.basket);
  useEffect(() => {
    axiosInstance.get('/basket').then((res) => setBasket(res.data));
  }, []);

  return (
    <Table striped="columns">
      <h1>...</h1>
      <BasketWraper basket={basket}/>
    </Table>
  );
}
