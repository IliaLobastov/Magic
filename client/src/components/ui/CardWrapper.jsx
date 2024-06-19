import { StyledRow } from '../styled/StyledRow';
import Card from './Card';

export default function EventWrapper({ cards }) {
  return (
    <StyledRow className="mt-3">
      <h1>CardWrapper</h1>
      {cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </StyledRow>
  );
}
