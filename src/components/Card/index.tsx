import React from "react";
import { useQuery } from "react-query";
import { CardResponse, getCard, IMAGE_BASE_URL } from "../../pocket/config";
import { useParams } from "react-router";
import { Record } from "pocketbase";
import { Content, Wrapper } from "../TarotCardInfo/TarotCardInfo.styles";

interface OneCardProps {
  //   setCurrentCard: string
  card?: CardResponse | Record;
}

 export const OneCard:  React.FC<OneCardProps> =  ({ card }) => {
  const { cardId } = useParams();

  const tarotQuery = useQuery(["tarot_cards", cardId], () => getCard(cardId!));
  const cardData =  tarotQuery.data;
  let id = cardData?.id
  let image = cardData?.img
  let fullURl = IMAGE_BASE_URL+id+'/'+image

  return (
    <Wrapper>
      <Content>

       {cardData?.name}
       <div>
              {cardData?.fortune_telling.fortune_telling[0]}
            </div>
      </Content>
    </Wrapper>
  );
};
