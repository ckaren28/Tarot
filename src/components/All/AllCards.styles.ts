import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--darkGrey);
  padding: 0 20px;
  content-align: center;
  border: solid 1px pink;
`;

export const Content = styled.div`
  overflow: scroll;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  margin: 0 auto;
  `;
//   max-width: var(--maxWidth);

export const CardImg = styled.img`
  width: 200px;

  @media screen and (max-width: 500px) {
    width: 150px;
  }
`;

