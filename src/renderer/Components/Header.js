import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`

const Header = () => {
  return (
    <Container>
      <Link to='home'>Home</Link>
      <Link to='send/ryuken'>Send</Link>
      <Link to='history'>History</Link>
      <Link to='config'>Config</Link>
      <div>Header</div>
    </Container>
  )
}

export default React.memo(Header);
