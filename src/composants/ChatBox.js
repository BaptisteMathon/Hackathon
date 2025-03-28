import React, { useState } from 'react';
import './ChatBox.css';

function ChatBox() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [selectedConversation, setSelectedConversation] = useState(null);

  const conversations = [
    { id: 1, name: 'Alice', messages: [] },
    { id: 2, name: 'Bob', messages: [] }
  ];

  const sendMessage = () => {
    if (input.trim() === '') return;
    
    const newMessage = { text: input, sender: 'user' };
    setMessages([...messages, newMessage]);
    setInput('');
  };

  return (
    <div className="chat-container">
      <div className="sidebar">
        <div className="conversation-list">
          {conversations.map((conv) => (
            <div 
              key={conv.id} 
              className="conversation-item" 
              onClick={() => setSelectedConversation(conv)}
            >
              <div className="avatar"></div>
              <span>{conv.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="chat-box">
        {selectedConversation ? (
          <>
            <div className="chat-header">
              <h2>{selectedConversation.name}</h2>
            </div>
            <div className="chat-messages">
              {messages.map((msg, index) => (
                <div key={index} className={`message ${msg.sender}`}>{msg.text}</div>
              ))}
            </div>
            <div className="chat-input">
              <input 
                type="text" 
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
                placeholder="Tapez votre message..." 
              />
              <button className="send-button" onClick={sendMessage}>Envoyer</button>
            </div>
          </>
        ) : (
          <p>Sélectionnez une conversation</p>
        )}
      </div>
    </div>
  );
}

export default ChatBox;
