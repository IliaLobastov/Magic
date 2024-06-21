import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import useStore from '../store';
import axiosInstance from '../api/axiosInstance';

export default function SignUp({ signUpHandler }) {
  const [input, setInput] = useState([]);
  const setCities = useStore((state) => state.setCities);
  const cities = useStore((state) => state.cities);
  
  useEffect(() => {
    axiosInstance.get('/auth/cites').then((res) => setCities(res.data));
  }, []);

  const handleCityChange = (event) => {
    setInput(event.target.value);
  };
  return (
    <Row>
      <Col md={{ span: 6, offset: 3 }} className="mt-5">
        <h3 className="text-center">Sign Up</h3>
        <Form onSubmit={(e) => signUpHandler(e, input)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              name="name"
              type="text"
              placeholder="Enter first name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCity">
            <Form.Label>City</Form.Label>
            <Form.Select value={input} onChange={handleCityChange} aria-label="Default select example" required>
              <option>Select a city</option>
              {cities.map((city) => (
                <option key={city.id} value={city.id}>{city.cityName}</option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control name="email" type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Enter password"
            />
          </Form.Group>
          <Button variant="outline-primary" type="submit">
            Submit
          </Button>
        </Form>
      </Col>
    </Row>

  );
}
