import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

const Container = styled.div`
  max-width: 740px;
  margin: auto;
  font-family: "Poppins", sans-serif;
`;

const StyledFooter = styled.footer`
  color: #9b9b9b8a;
  font-size: 0.8rem;
  text-align: center;
  margin-top: 1rem;
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container>
      <Navbar />
      <div>{children}</div>
      <StyledFooter>
        &copy; <a href="https://github.com/lemokami">lemokami</a> 2021
      </StyledFooter>
    </Container>
  );
};

export default Layout;
