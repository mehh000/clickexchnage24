'use client';

import { userContext } from '@/context/userContext';
import { addChatWithMessage } from '@/service/globalChat';
import { collection, query, where, onSnapshot, getDocs } from 'firebase/firestore';
import { db } from '@/DB/firebase_config';
import React, { useContext, useEffect, useState } from 'react';

function ChatPage() {
  const [input, setInput] = useState('');
  const { user } = useContext(userContext);
  const [messages, setMessages] = useState([]);

  const fetchInitialChats = async () => {
    if (!user?.id) return;

    try {
      const chatsQuery = query(collection(db, 'chats'), where('users', 'array-contains', user.id));
      const querySnapshot = await getDocs(chatsQuery);

      const initialChats = [];
      for (const docSnapshot of querySnapshot.docs) {
        const chatDoc = docSnapshot.data();
        const messagesQuery = collection(docSnapshot.ref, 'messages');
        const messagesSnapshot = await getDocs(messagesQuery);
        const messages = messagesSnapshot.docs.map((msgDoc) => ({
          id: msgDoc.id,
          ...msgDoc.data(),
        }));

        initialChats.push({
          id: docSnapshot.id,
          ...chatDoc,
          messages,
        });
      }

      setMessages(initialChats);
    } catch (error) {
      console.error('Error fetching initial chats:', error);
    }
  };

  const setupRealTimeListener = () => {
    if (!user?.id) return;

    const chatsQuery = query(collection(db, 'chats'), where('users', 'array-contains', user.id));

    const unsubscribe = onSnapshot(chatsQuery, (querySnapshot) => {
      querySnapshot.forEach((docSnapshot) => {
        const chatDoc = docSnapshot.data();
        const messagesCollectionRef = collection(docSnapshot.ref, 'messages');

        onSnapshot(messagesCollectionRef, (messagesSnapshot) => {
          const messages = messagesSnapshot.docs.map((msgDoc) => ({
            id: msgDoc.id,
            ...msgDoc.data(),
          }));

          setMessages((prevMessages) => {
            const updatedChats = [...prevMessages];
            const chatIndex = updatedChats.findIndex((chat) => chat.id === docSnapshot.id);

            if (chatIndex > -1) {
              updatedChats[chatIndex] = {
                id: docSnapshot.id,
                ...chatDoc,
                messages,
              };
            } else {
              updatedChats.push({
                id: docSnapshot.id,
                ...chatDoc,
                messages,
              });
            }

            return updatedChats;
          });
        });
      });
    });

    return unsubscribe;
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    try {
      const adminID = 'fHcK8r1oTSRd9UH370LjcqY6d3j1';
      const message = input;
      const time = new Date().getTime();

      await addChatWithMessage(user.id, adminID, user.id, message, time);
      setInput('');
      console.log('Message sent successfully');
    } catch (error) {
      console.error('Failed to send message:', error);
    }
  };

  useEffect(() => {
    if (!user?.id) return;

    // Initial fetch
    fetchInitialChats();

    // Set up real-time listener
    const unsubscribe = setupRealTimeListener();

    return () => unsubscribe && unsubscribe();
  }, [user?.id]);

  return (
    <div className="w-full h-full bg-gray-50 py-5 px-0 sm:px-6 lg:px-8">
      <div className="w-full h-full max-w-4xl mx-auto bg-white shadow-xl rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">Chat Support</h1>
        <div className="h-96 overflow-y-auto mb-4 border border-gray-300 rounded-md p-4">
          {messages && messages.length > 0 ? (
            messages.map((chat) => (
              <div key={chat.id} className="mb-4">
                {chat.messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`mb-2 ${
                      msg.senderId != user?.id ? 'text-left' : 'text-right'
                    }`}
                  >
                    <p
                      className={`inline-block px-4 py-2 rounded-md ${
                        msg.senderId === user?.id
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-300 text-black'
                      }`}
                    >
                      {msg.text}
                    </p>
                    <span className="block text-xs text-gray-500 mt-1">
                      {new Date(msg.time).toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
            ))
          ) : (
            <p className="text-gray-500">Loading...</p>
          )}
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
