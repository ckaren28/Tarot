import styled from "styled-components";

export const Image = styled.img`
  width: 100%;
  max-width: 720px;
  transition: all 0.3s;
  object-fit: cover;
  border-radius: 20px;
  animation: animateThumb 0.5s;

  :hover {
    opacity: 0.8;
  }

  @keyframes animateThumb {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  min-height: 100px;
  background: var(--darkGrey);
  padding: 0 20px;
`;

export const Content = styled.div`
  display: flex;
  max-width: var(--maxWidth);
  width: 100%;
  margin: 0 auto;

  .column {
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--medGrey);
    border-radius: 20px;
    margin: 0 20px;
    flex: 1;

    :first-child {
      margin-left: 0;
    }

    :last-child {
      margin-right: 0;
    }
  }

  @media screen and (max-width: 768px) {
    display: block;

    .column {
      margin: 20px 0;
    }
  }

`;
