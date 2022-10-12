import React from 'react';
import { Link } from 'react-router-dom';

// import RMDBLogo from '../../images/react-movie-logo.svg';
// import TMDBLogo from '../../images/tmdb_logo.svg';

import { Wrapper, Content } from './Header.styles';

const Header: React.FC = () => {
  return (
    <Wrapper>
      <Content>
        <Link to='/'>
          Hi
        </Link>
        
      </Content>
    </Wrapper>
  );
};

export default Header;