import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

export default function CardForm({ cardSubmitHandler }) {
  return (
    <Form onSubmit={cardSubmitHandler}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Название</Form.Label>
        <Form.Control name="title" type="text" placeholder="введи название" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Цена</Form.Label>
        <Form.Control name="price" type="number" placeholder="0" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Состояние:</Form.Label>
        <Form.Check name="newcard" type="checkbox" label="новая карточка" />
        <Form.Check name="newcard" type="checkbox" label="б/у" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Фото:</Form.Label>
        <Form.Control name="file" type="file" placeholder="Enter text" />
      </Form.Group>
      <Button variant="outline-primary" type="submit">
        ДОБАВИТЬ
      </Button>
    </Form>
  );
}
