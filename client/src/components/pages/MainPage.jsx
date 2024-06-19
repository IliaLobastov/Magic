import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import CardWrapper from "../ui/CardWrapper";
import CardModal from "../ui/CardModal";
import CardForm from "../ui/CardForm";

export default function MainPage() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("api/cards")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
  return (
    <Row>
      <Col>
        <CardModal title="Создай карточку" buttonText="ДОБАВИТЬ">
          <CardForm />
        </CardModal>
      </Col>
      <CardWrapper cards={cards} />
    </Row>
  );
}
