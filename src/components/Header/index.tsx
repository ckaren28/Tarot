import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Button } from '../Button'

import { Wrapper, Content } from './Header.styles';

const Header: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Content className='nav'>
        <Link to='/all-cards'>
          All Cards
        </Link>
       
        {/* <Button
          label="Home"
          onClick={() => navigate("/")}
          radius="5px"
          textSize="1.3rem"
          margin="10px"
          border={"1px  solid"}
        />  */}
        
      </Content>
    </Wrapper>
  );
};

export default Header;