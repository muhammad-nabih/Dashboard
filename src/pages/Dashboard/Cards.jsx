import { Stack } from "@mui/material";
import Card from "./Card";
import { cardData } from "./CardData";

export default function Cards() {
  return (
    <Stack direction="row" sx={{ gap: "10px", flexWrap: "wrap" }}>
      {cardData.map((card, index) => (
        <Card
          key={index}
          scheme={card.scheme}
          numbers={card.numbers}
          title={card.title}
          percent={card.percent}
        >
          {card.icon}
        </Card>
      ))}
    </Stack>
  );
}
