import React from 'react';
import { Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

export default function SignUp({ signUpHandler }) {
  return (
    <Form onSubmit={signUpHandler}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control
          name="name"
          type="text"
          placeholder="Enter first name"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      SignUp
      <Col sm="10">
        <Form.Control type="password" placeholder="Password" />
      </Col>
      <Button variant="outline-primary" type="submit">
        Submit
      </Button>
    </Form>

  );
}
