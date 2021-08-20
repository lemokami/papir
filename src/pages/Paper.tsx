import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useHistory, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { BASE64REGEX } from '../constants';

const StyledMessage = styled.div`
  font-weight: normal;
  color: black;
`;

const Paper = () => {
  let { message } = useParams<{ message: string }>();
  const [decodedMessage, setDecodedMessage] = useState<string | ''>('');
  const history = useHistory();

  useEffect(() => {
    try {
      if (BASE64REGEX.test(message)) {
        setDecodedMessage(atob(message)); // decoding the message and storing it
      } else {
        throw Error;
      }
    } catch (err) {
      history.push('/404');
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Papír | Here's a message for you</title>
        <meta property='og:title' content="Papír | Here's a message for you" />
        <meta name='twitter:title' content="Papír | Here's a message for you" />
      </Helmet>
      <StyledMessage>{decodedMessage}</StyledMessage>
    </>
  );
};

export default Paper;
