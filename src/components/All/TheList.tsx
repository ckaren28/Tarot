import React from "react";
import { CardResponse, IMAGE_BASE_URL } from "../../pocket/config";
import { Record } from "pocketbase";
import { Wrapper, Content, CardImg } from "./AllCards.styles";


interface TheListProps {
  list?: CardResponse[] | Record[];
}

export const TheList: React.FC<TheListProps> = ({ list }) => {
  return (
    <div className="i">
      {list &&
        list.map((item) => {
          return <OneRow key={item.id} item={item} />;
        })}
    </div>
  );
};

interface OneRowProps {
  item: CardResponse | Record;
}


export const OneRow: React.FC<OneRowProps> = ({ item }) => {
    let id = item.id
    let image = item.img
    let fullURl = IMAGE_BASE_URL+id+'/'+image
  return (
    <Wrapper>
      <Content>

        <div className="w-full text-lg font-normal text-purple-600">
          {item.name}
        </div>
        <div className="w-full text-lg text-bold">{item.name}</div>
        <div className="w-full text-base font-normal">
          {item.fortune_telling.fortune_telling[0]}
        </div>
        <div className="w-full text-base font-normal">
          <CardImg
            src={fullURl}
            alt={item.name}
          />
          {/* {item.img} */}
        </div>
      </Content>
    </Wrapper>
  );
};
