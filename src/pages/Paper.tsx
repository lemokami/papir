import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { BASE64REGEX } from '../constants';

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

  return <div>{decodedMessage}</div>;
};

export default Paper;
