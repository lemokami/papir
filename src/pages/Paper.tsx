import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Base64 } from "js-base64";
import { HomeButton } from "./404";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledMessage = styled.div`
  font-weight: normal;
  color: black;
  min-height: 50vh;
  align-self: flex-start;
`;

const Paper = () => {
  let { message } = useParams<{ message: string }>();
  const [decodedMessage, setDecodedMessage] = useState<string | "">("");
  const history = useHistory();

  useEffect(() => {
    try {
      if (Base64.isValid(message)) {
        setDecodedMessage(Base64.decode(message)); // decoding the message and storing it
      } else {
        throw Error;
      }
    } catch (err) {
      history.push("/404");
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Papír | Here's a message for you</title>
        <meta property="og:title" content="Papír | Here's a message for you" />
        <meta name="twitter:title" content="Papír | Here's a message for you" />
      </Helmet>
      <Wrapper>
        <StyledMessage>{decodedMessage}</StyledMessage>
        <HomeButton to="/">Create a Message</HomeButton>
      </Wrapper>
    </>
  );
};

export default Paper;
