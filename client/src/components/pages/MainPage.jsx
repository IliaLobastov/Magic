import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import CardWrapper from "../ui/CardWrapper";
import CardModal from "../ui/CardModal";
import CardForm from "../ui/CardForm";
import axiosInstance from "../api/axiosInstance";
import useStore from "../store";

export default function MainPage() {
  const card = useStore((state) => state.card);
  const setCards = useStore((state) => state.setCards)

  useEffect(() => {
    axiosInstance.get("/cards").then((res) => setCards(res.data));
  }, []);
  
  const cardSubmitHandler = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    if (!data.title || !data.price || !data.file) return;

    const formData = new FormData();

    formData.append("title", data.title);
    formData.append("price", data.price);
    formData.append("file", data.file);

    axiosInstance
      .post("/cards", formData)
      .then((res) => {
        setCards((prev) => [res.data, ...prev]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const user = useStore((state) => state.user);

  const submitCardHandler = async (id) => {
    console.log('--------------');
    try {
      const response = await axiosInstance.post('/basket', { userId: user.id, cardId: id });
      if (response.status === 201) {
        console.log('товар добавлен в корзину');
      }
    } catch (error) {
      console.log('ошибка при добавлении в корзину');
    }
  };

  return (
    <Row>
      <Col>
        <CardModal title="Добавить карточку" buttonText="ДОБАВИТЬ">
          <CardForm cardSubmitHandler={cardSubmitHandler} />
        </CardModal>
      </Col>
      <CardWrapper submitCardHandler={submitCardHandler} />
    </Row>
  );
}
