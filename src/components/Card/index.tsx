import React from 'react';
//components

import { CardResponse, IMAGE_BASE_URL, POSTER_SIZE } from "../../pocket/config";

//styles
import {  Content, Text } from './CardInfo.styles';
import { Record } from "pocketbase";

interface CardProps {
    card?: CardResponse[] | Record[];
  }
  
export const CardInfo: React.FC<CardProps> = ({ card }) => (
    // <Wrapper backdrop={card.img}>
    <Content>
        {/* <Thumb image={
          item.img
          ? `${IMAGE_BASE_URL}${POSTER_SIZE}${card.img}`
          : NoImage
        }
        clickable={false}
       alt='item-thumb'
       /> */}
      <Text>
        {/* <h1>{item.name}</h1> */}
        {/* <h3>ABOUT</h3>
        <p>{item.overview}</p>

        <div className='rating-directors'>
          <div>
            <h3>RATING</h3>
            <div className='score'>{item.vote_average}</div>
          </div>
          <div className='director'>
            <h3>DIRECTOR{item.directors.length > 1 ? 'S' : ''}</h3>
            {item.directors.map(director => (
              <p key={director.credit_id}>{director.name}</p>
            ))}
          </div>
        </div> */}

      </Text>
    </Content>
//   </Wrapper>
);

