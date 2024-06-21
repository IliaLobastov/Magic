import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import { StyledCard } from '../styled/StyledCard';

export default function MyCard({ card, deleteHandler }) {
  return (
    // <Col md={4} className="mt-2 position-relative">
    //   <Card
    //     style={{
    //       minHeight: '400px',
    //       maxHeight: '400px',
    //     }}
    //   >
    //     <Card.Img
    //       style={{
    //         width: '100%',
    //         height: '400px',
    //         objectFit: 'cover',
    //       }}
    //       variant="top"
    //       src={`http://localhost:3000/img/${card.image}`}
    //     />
    //     <StyledCard>
    //       <h2 className="p-2">{card.title}</h2>
    //       <h3 className="p-2">{card.price}</h3>
    //       <p className="p-2">{card.newCard}</p>
    //       <div className="d-flex flex-row justify-content-end gap-4">
    //         <Button onClick={() => deleteHandler(card.id)} variant="outline-danger" className="mb-2">
    //           Удалить
    //         </Button>
    //       </div>
    //     </StyledCard>
    //   </Card>
    // </Col>
    <Col md={4} className="mt-2 position-relative">
      <Card
        style={{
          height: '100%',
          borderRadius: '15px',
          backdropFilter: 'red', // Закругление углов карточки
        }}
      >
        <Card.Img
          style={{
            width: '100%',
            height: '550px',
            objectFit: 'cover',
            borderTopLeftRadius: '15px', // Закругление углов изображения
            borderTopRightRadius: '15px',
          }}
          variant="top"
          src={`http://localhost:3000/img/${card.image}`}
        />
        <Card.Body style={{
          backgroundColor: '#FFDAB9',
          borderBottomLeftRadius: '15px', // Закругление углов изображения
          borderBottomRightRadius: '15px',
        }}
        >
          <Card.Title>{card.title}</Card.Title>
          <Card.Text>{`${card.price}¥`}</Card.Text>
          <Card.Text>{card.newcard}</Card.Text>
          <div className="d-flex justify-content-between">
            <Button onClick={() => deleteHandler(card.id)} variant="outline-danger" className="mb-2">
              Удалить
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}
