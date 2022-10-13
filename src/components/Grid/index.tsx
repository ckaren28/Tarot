import React from 'react';
import { Wrapper, Content } from './Grid.styles';
type Props = {
  header: string,
  children: any
}

export const Grid: React.FC<Props> = ({ header, children }) => {


  return (
    <>
      <Wrapper>
        <h1>{header}</h1>
        <Content>{children}</Content>
      </Wrapper>
    </>
  );
};
