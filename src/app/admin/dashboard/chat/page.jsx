'use client'

import React, { useState } from 'react';

function ChatPage() {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! How can I assist you today?", sender: 'receiver' },
    { id: 2, text: "I'm looking for information on your services.", sender: 'sender' },
  ]);
  const [input, setInput] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages([...messages, { id: messages.length + 1, text: input, sender: 'sender' }]);
      setInput('');
    }
  };

  return (
    <div className="w-full h-full bg-gray-50 py-2 px-0 sm:px-6 lg:px-8">
      <div className="w-full h-full max-w-4xl mx-auto bg-white shadow-xl rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">Chat Support</h1>
        <div className="h-96 overflow-y-auto mb-4 border border-gray-300 rounded-md p-4">
          {messages.map((message) => (
            <div key={message.id} className={`mb-2 ${message.sender === 'sender' ? 'text-right' : 'text-left'}`}>
              <p className={`inline-block px-4 py-2 rounded-md ${message.sender === 'sender' ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-700'}`}>
                {message.text}
              </p>
            </div>
          ))}
        </div>
        <form onSubmit={handleSendMessage} className="flex">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-grow border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Type your message..."
          />
          <button
            type="submit"
            className="ml-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChatPage;
