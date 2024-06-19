import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function EventForm({  }) {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control name="title" type="text" placeholder="введи название" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Adres</Form.Label>
        <Form.Control name="adres" type="text" placeholder="введи адрес" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Maxmembers</Form.Label>
        <Form.Control name="maxmembers" type="number" placeholder="number" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Image</Form.Label>
        <Form.Control name="file" type="file" placeholder="Enter text" />
      </Form.Group>
      <Button variant="outline-primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
