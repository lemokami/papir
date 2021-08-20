import React from 'react';
import styled from 'styled-components';
import { StyledLink } from '../components/Navbar';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  gap: 1.25rem;
`;

const HomeButton = styled(StyledLink)`
  background-color: black;
  padding: 0.6rem 1.5rem;
  color: white;
  border-radius: 8px;
  font-size: 0.8rem;
`;

const NotFound = () => {
  return (
    <Wrapper>
      <img src='/404-meme.jpeg' alt='somethings wrong' />
      <HomeButton to='/'>Create a Message</HomeButton>
    </Wrapper>
  );
};

export default NotFound;
