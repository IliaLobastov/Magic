import Table from 'react-bootstrap/Table';
import React from 'react';

export default function Basket() {
  return (
    <Table striped="columns">
      <thead>
        <tr>
          <th>#</th>
          <th>Карточка</th>
          <th>Стоимость</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
        </tr>
      </tbody>
    </Table>
  );
}
