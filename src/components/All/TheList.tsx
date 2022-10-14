import React from "react";
import { CardResponse, IMAGE_BASE_URL } from "../../pocket/config";
import { Record } from "pocketbase";
import { Wrapper, Content, CardImg } from "./AllCards.styles";
import { Grid } from "../Grid";
import { Link } from 'react-router-dom';
// import {Card} from "../Card";

interface TheListProps {
  list?: CardResponse[] | Record[];
  random?: CardResponse[] | Record[];
}

export const TheList: React.FC<TheListProps> = ({list}) => {
  return (
    <Grid header="All Cards">
      {list &&
        list.map((item) => {
          return <SingleCard key={item.id} item={item} />;
        })}
    </Grid >
  );
};

interface SingleCardProps {
  item: CardResponse | Record;
}


export const SingleCard: React.FC<SingleCardProps> = ({ item }) => {
    let id = item.id
    let image = item.img
    let fullURl = IMAGE_BASE_URL+id+'/'+image
  return (
    <Wrapper>
      <Content>
        <Link to={`/${item.id}`} >
          <CardImg
                src={fullURl}
                alt={item.name}
              />
        </Link>
          <h3>{item.name}</h3>
            <div>
              {item.fortune_telling.fortune_telling[0]}
            </div>
        
      </Content>
    </Wrapper>
  );
};
