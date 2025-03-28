import React, { useState } from "react";
import ChatBox from "../composants/ChatBox";
import "./ChatPage.css";

function ChatPage() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="chat-container">
      {/* Boîte de chat */}
      <div className="chat-box">
        <div className="chat-header">Discussion</div>

        <input
          type="text"
          className="search-input"
          placeholder="Rechercher un message..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <ChatBox searchTerm={searchTerm} />

      </div>
    </div>
  );
}

export default ChatPage;
