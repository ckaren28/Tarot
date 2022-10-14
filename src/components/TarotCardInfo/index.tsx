import React from 'react';
//styles
import { Wrapper, Content } from './TarotCardInfo.styles';
// Types
type Props = {
    id:string,
    name: string,
    suit: string,
    fortune: string,
    meanings: string,
    up: boolean
}

const CardInfo: React.FC<Props> = ({ name, suit, fortune, up, meanings }) => (
  <Wrapper>
    <Content>
      <div className='column'>
        <p>{name}</p>
      </div>
      <div className='column'>
        <p>Face Up: {up}</p>
      </div>
      <div className='column'>
        <p>suit: {suit}</p>
      </div>
      <div className='column'>
        <p>fortune:  {fortune} </p>
      </div>
      <div className='column'>
        <p>meanings: {meanings}</p>
      </div>
    </Content>
  </Wrapper>
);

export default CardInfo;
