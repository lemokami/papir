import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';

const Container = styled.div`
  max-width: 740px;
  margin: auto;
  font-family: 'Poppins', sans-serif;
`;

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container>
      <Navbar />
      <div>{children}</div>
    </Container>
  );
};

export default Layout;
