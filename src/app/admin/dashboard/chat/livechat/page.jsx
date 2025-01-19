'use client'

import { userContext } from '@/context/userContext';
import { addChatWithMessage, getChatsWithMessages, } from '@/service/globalChat';


import { sendMessage } from '@/service/livechat';
import React, { useContext, useEffect, useState } from 'react';


function ChatPage() {

  const [input, setInput] = useState('');
  const { user } = useContext(userContext);
  const [messages, setMessages] = useState();

  const fetchChatDocument = async () => {
    try {
      if (user?.id) {
        const chatDoc = await getChatsWithMessages(user.id);
        console.log("Fetched chats:", chatDoc);
        setMessages(chatDoc);
      } else {
        console.log("User ID is not available.");
      }
    } catch (error) {
      console.error("Error fetching chat document:", error);
    }
  };

  // the admin page 
  const handleSendMessage = async (e) => {
    e.preventDefault();
    try {
      const adminID = 'ABy5QRkgTtca7MBIzquoyNvNTJt1';

      const message = input;
      const time = new Date().getTime();
      await addChatWithMessage(adminID, user.id, user.id, message, time)
      fetchChatDocument();
      setInput('');
      console.log('Message sent successfully');
    } catch (error) {
      console.error('Failed to send message:', error);
    }
  };

  useEffect(() => {


    fetchChatDocument();
  }, [user?.id]); // Add user.id as a dependency


  return (
    <div className="w-full h-full bg-gray-50 py-5 px-0 sm:px-6 lg:px-8">
      <div className="w-full h-full max-w-4xl mx-auto bg-white shadow-xl rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">Chat Support</h1>
        <div className="h-96 overflow-y-auto mb-4 border border-gray-300 rounded-md p-4">
          {/* Render chat messages amin */}
          {
            messages && Array.isArray(messages) && messages.length > 0 ? (
              messages.map((chat, chatIndex) => (
                <div key={chat.id || chatIndex} className="mb-4">

                  {Array.isArray(chat.messages) && chat.messages.length > 0 ? (
                    chat.messages.map((msg, msgIndex) => (
                      <div key={msg.id || msgIndex} className={`mb-2  ${msg.senderId != user?.id ? 'text-left' : 'text-right'}`}>
                        <p
                          className={`inline-block px-4 py-2 rounded-md ${msg.senderId != user?.id ? 'bg-blue-600 text-white' : 'bg-gray-300 text-black'
                            }`}
                        >
                          {msg.text}
                        </p>
                        <span className="block text-xs text-gray-500 mt-1">
                          {new Date(msg.time).toLocaleString()}
                        </span>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-500">No messages available.</p>
                  )}
                </div>
              ))
            ) : (
              <p className="text-gray-500">Loading...</p>
            )
          }




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
            onClick={handleSendMessage}
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
