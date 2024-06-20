import { StyledRow } from "../styled/StyledRow";
import Card from "./Card";
import "../styleCSS/CardWrapper.css";

export default function CardWrapper({ cards }) {
  return (
    <StyledRow className="mt-3">
      <h1>Magic Cards:</h1>
      {cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </StyledRow>
  );
}
