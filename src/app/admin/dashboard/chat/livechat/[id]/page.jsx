"use client";

import { userContext } from '@/context/userContext';
import { adminChatAdd, getChatsWithMessages } from '@/service/globalChat';
import React, { useContext, useEffect, useState } from 'react';
import { query, orderBy, onSnapshot, collection, doc } from "firebase/firestore";

import { db } from '@/DB/firebase_config';


function ChatPage({ params }) {
  const unwrappedParams = React.use(params); // Unwrap the params promise
  const { id } = unwrappedParams;


  const [input, setInput] = useState('');
  const {
    user,
  } = useContext(userContext);
  const [messages, setMessages] = useState();
  const [chats, setChats] = useState();
  const [re, setRe] = useState(true);




  useEffect(() => {
    if (!id) return;
  
    const chatDocRef = doc(db, "chats", id);
    const messagesCollectionRef = collection(chatDocRef, "messages");
  
    // Create a query to order messages by timestamp in ascending order
    const messagesQuery = query(messagesCollectionRef, orderBy("timestamp", "asc"));
  
    // Real-time listener for Firestore messages
    const unsubscribe = onSnapshot(messagesQuery, (snapshot) => {
      const updatedMessages = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMessages(updatedMessages);
    });
  
    // Cleanup listener on component unmount
    return () => unsubscribe();
  }, [id]);




  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    try {
      const chatMessage = input.trim();
      const time = new Date().getTime();
      await adminChatAdd(id, user?.id, chatMessage, time);
      setInput(""); // Clear input after message send
    } catch (error) {
      console.error("Failed to send message:", error);
    }
  };

  return (
    <div className="w-full h-full bg-gray-50 py-5 px-0 sm:px-6 lg:px-8">
      <div className="w-full h-full max-w-4xl mx-auto bg-white shadow-xl rounded-lg p-5">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Chat Support
        </h1>
        <div className="h-96 overflow-y-auto mb-4 border border-gray-300 rounded-md p-4">
          {/* render text here */}
          {
            messages != null ? (
              messages.map((msg, msgIndex) => (
                <div
                  key={msg.id || msgIndex}
                  className={`mb-2 ${msg.senderId != user?.id ? 'text-left' : 'text-right'
                    }`}
                >
                  <p
                    className={`inline-block px-4 py-2 rounded-md ${msg.senderId === user?.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-300 text-black'
                      }`}
                  >
                    {msg.text}
                  </p>
                  <span className="block text-xs text-gray-500 mt-1">
               {new Date(msg.timestamp).toLocaleString()}
            
                  </span>
                </div>
              ))
            ) : ('error')
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
