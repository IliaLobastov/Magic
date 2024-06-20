import styled from 'styled-components';
import Row from 'react-bootstrap/Row';

export const StyledRow = styled(Row)`
  max-width: 98%;
  // background-color: #4a2e19;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  font-family: "Cinzel", serif;
  box-shadow: 0 0 10px #ccc;
  transition: box-shadow 0.5s;
  &:hover {
    box-shadow: 0 0 15px #aaa;
  }
`;
