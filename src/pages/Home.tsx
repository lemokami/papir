import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 10px;
`;

const LabelDiv = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  label {
    font-size: 0.9 rem;
  }
`;

const TextCounter = styled.span`
  color: rgba(156, 156, 156, 1);
  font-size: 0.8rem;
`;

const StyledInput = styled.textarea`
  height: 20rem;
  border: 1px dashed transparent;
  font-size: 0.9rem;
  font-family: inherit;
  background-color: rgba(239, 239, 239, 1);
  border-radius: 8px;
  padding: 0.5rem;
  margin: 10px 0;
  &:focus {
    outline: none;
    border: 1px dashed black;
  }
`;

const StyledShareButton = styled.button`
  border: 0;
  border-radius: 8px;
  width: 100%;
  color: white;
  background-color: rgba(39, 39, 39, 1);
  padding: 1rem;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Home = () => {
  const [message, setMessage] = useState<string | ''>('');

  const handleTextInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };
  const handleUserShare = () => {
    navigator.clipboard.writeText(window.location.href + btoa(message));
  };
  return (
    <Wrapper>
      <LabelDiv>
        <label htmlFor='message'>Message</label>
        {/* <TextCounter>{`${message.trim().length}/250`}</TextCounter> */}
      </LabelDiv>
      <StyledInput
        id='message'
        value={message}
        onChange={(e) => handleTextInput(e)}
      />
      <StyledShareButton onClick={handleUserShare}>
        Share your Message
      </StyledShareButton>
    </Wrapper>
  );
};

export default Home;
