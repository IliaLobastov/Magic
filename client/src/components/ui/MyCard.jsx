import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import { StyledCard } from '../styled/StyledCard';

export default function MyCard({ image, title, price, newCard, deleteHandler }) {
  return (
    <Col md={4} className="mt-2 position-relative">
      <Card
        style={{
          minHeight: '400px',
          maxHeight: '400px',
        }}
      >
        <Card.Img
          style={{
            width: '100%',
            height: '400px',
            objectFit: 'cover',
          }}
          variant="top"
          src={`http://localhost:3000/img/${image}`}
        />
        <StyledCard>
          <h2 className="p-2">{title}</h2>
          <h3 className="p-2">{price}</h3>
          <p className="p-2">{newCard}</p>
          <div className="d-flex flex-row justify-content-end gap-4">
            <Button onClick={deleteHandler} variant="outline-danger" className="mb-2">
              Удалить
            </Button>
          </div>
        </StyledCard>
      </Card>
    </Col>
  );
}
