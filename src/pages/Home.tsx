import React, { useState } from 'react';

const Home = () => {
  const [message, setMessage] = useState<string | ''>('');
  const copyLinkToClipBoard = () => {
    navigator.clipboard.writeText(window.location.href + btoa(message));
  };
  return (
    <div>
      <input
        type='text'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={copyLinkToClipBoard}>Share your Message</button>
    </div>
  );
};

export default Home;
