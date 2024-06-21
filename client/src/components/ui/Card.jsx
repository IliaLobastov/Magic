import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";
import { StyledCard } from "../styled/StyledCard";

export default function MagicCard({ card, submitCardHandler }) {
  return (
    <Col md={4} className="mt-2 position-relative">
      <Card
        style={{
          height: "100%",
          borderRadius: "15px",
          backdropFilter: "red", // Закругление углов карточки
        }}
      >
        <Card.Img
          style={{
            width: "100%",
            height: "300px",
            objectFit: "cover",
            borderTopLeftRadius: "15px", // Закругление углов изображения
            borderTopRightRadius: "15px",
          }}
          variant="top"
          src={`http://localhost:3000/img/${card.image}`}
        />
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text>{`${card.price}¥`}</Card.Text>
          <Card.Text>{card.newcard}</Card.Text>
          <div className="d-flex justify-content-between">
            <Button
              onClick={() => submitCardHandler(card.id)}
              variant="outline-danger"
            >
              Добавить в корзину
            </Button>
            <Button variant="outline-danger">Удалить</Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}
