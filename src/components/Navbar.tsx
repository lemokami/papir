import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillGithub } from 'react-icons/ai';
import styled from 'styled-components';

const StyledNavbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  & h1 {
    font-weight: bold;
  }
`;

const StyledGithubButton = styled.button`
  padding: 0.8rem 1.5rem;
  background-color: rgba(39, 39, 39, 1);
  cursor: pointer;
  border: 0;
  border-radius: 8px;
  color: white;
`;

const Navbar = () => {
  return (
    <StyledNavbar>
      <StyledLink to='/'>
        <h1>Papir</h1>
      </StyledLink>
      <a href='https://github.com/lemokami/papir'>
        <StyledGithubButton>Github</StyledGithubButton>
      </a>
    </StyledNavbar>
  );
};

export default Navbar;
