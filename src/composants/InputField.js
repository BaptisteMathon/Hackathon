import React, { useState } from 'react';
import './InputField.css';

const InputField = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim() !== '') {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <div className="chat-input">
      <input
        type="text"
        placeholder="Écrire un message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button className="send-button" onClick={handleSend}>Envoyer</button>
    </div>
  );
};

export default InputField;
