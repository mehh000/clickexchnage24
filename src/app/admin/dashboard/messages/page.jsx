'use client';

import React, { useState } from 'react';
import { EditIcon, TrashIcon, PlusCircleIcon } from 'lucide-react';

export default function Message() {
  const [messages, setMessages] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newMessage, setNewMessage] = useState('');
  const [editingMessageIndex, setEditingMessageIndex] = useState(null);

  const handleAddMessage = () => {
    if (newMessage.trim()) {
      if (editingMessageIndex !== null) {
        const updatedMessages = [...messages];
        updatedMessages[editingMessageIndex] = newMessage;
        setMessages(updatedMessages);
        setEditingMessageIndex(null);
      } else {
        setMessages([...messages, newMessage]);
      }
      setNewMessage('');
      setIsModalOpen(false);
    }
  };

  const handleEditMessage = (index) => {
    setNewMessage(messages[index]);
    setEditingMessageIndex(index);
    setIsModalOpen(true);
  };

  const handleDeleteMessage = (index) => {
    setMessages(messages.filter((_, i) => i !== index));
  };

  return (
    <div className="p-4">
      {messages.length === 0 ? (
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-500"
        >
          <PlusCircleIcon size={20} />
          Add Message
        </button>
      ) : (
        <div>
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-gray-100 p-4 rounded shadow"
              >
                <span className="text-gray-700">{message}</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleEditMessage(index)}
                    className="text-blue-600 hover:text-blue-500"
                  >
                    <EditIcon size={18} />
                  </button>
                  <button
                    onClick={() => handleDeleteMessage(index)}
                    className="text-red-600 hover:text-red-500"
                  >
                    <TrashIcon size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-4 flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-500"
          >
            <PlusCircleIcon size={20} />
            Add Another Message
          </button>
        </div>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h2 className="text-lg font-bold mb-4">
              {editingMessageIndex !== null ? 'Edit Message' : 'Add Message'}
            </h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleAddMessage();
              }}
            >
              <textarea
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type your message here..."
                className="mb-4 w-full p-2 border rounded focus:outline-none focus:ring resize-none"
                rows={4}
              />
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="bg-red-500 text-white px-4 py-2 rounded shadow hover:bg-red-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-400"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
