import React from "react";
import { useQuery } from "react-query";
import { CardResponse, getCard, IMAGE_BASE_URL } from "../../pocket/config";
import { useParams } from "react-router";
import { Record } from "pocketbase";
import { Wrapper, Content, Image } from "./OneCard.styles";

interface OneCardProps {
  //   setCurrentCard: string
  card?: CardResponse | Record;
  // up: boolean;
}

export const OneCard: React.FC<OneCardProps> = ({ card }) => {
  const { cardId } = useParams();

  const tarotQuery = useQuery(["tarot_cards", cardId], () => getCard(cardId!));
  
  const cardData = tarotQuery.data;
  let id = cardData?.id;
  let image = cardData?.img;
  let fullURl = IMAGE_BASE_URL + id + "/" + image;

  return (
    <Wrapper>
      <Content>
        <div className="column">
          <Image src={fullURl} alt={cardData?.name} />
        </div>
          <div className="column">
           Name: {cardData?.name}
          </div>
        <div className="column">
          Your Fortune: {cardData?.fortune_telling.fortune_telling[0]}
          </div>
          <div className="column">
            Suit: {cardData?.suit}
          </div>
          <div className="column">
            KeyWords: {cardData?.keywords.keywords[0]}
          </div>
          <div className="column">
            Meanings: {/* {cardData?.meanings.meanings[0]} */}
          </div>
      </Content>
    </Wrapper>
  );
};
