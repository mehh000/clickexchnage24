
'use client'


import React, { useState } from 'react';
import { UserIcon, EyeIcon, TrashIcon } from 'lucide-react';

const demoContacts = [
    { id: 1, username: 'User1', email: 'user1@example.com', message: 'Hello, I would like to know more about your services.' },
    { id: 2, username: 'User2', email: 'user2@example.com', message: 'Can you provide me with the latest updates?' },
    { id: 3, username: 'User3', email: 'user3@example.com', message: 'I have a question regarding my account.' },
    { id: 4, username: 'User4', email: 'user4@example.com', message: 'What are your business hours?' },
    { id: 5, username: 'User5', email: 'user5@example.com', message: 'I would like to schedule a meeting.' },
];

export default function ContactPage() {
    const [contacts, setContacts] = useState(demoContacts);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentMessage, setCurrentMessage] = useState('');

    const handleView = (message) => {
        setCurrentMessage(message);
        setIsModalOpen(true);
    };

    const handleDelete = (id) => {
        setContacts(contacts.filter(contact => contact.id !== id));
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setCurrentMessage('');
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Contact Messages</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b">Username</th>
                            <th className="py-2 px-4 border-b">Email</th>
                            <th className="py-2 px-4 border-b">Message</th>
                            <th className="py-2 px-4 border-b">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.map(contact => (
                            <tr key={contact.id}>
                                <td className="py-2 px-4 border-b">{contact.username}</td>
                                <td className="py-2 px-4 border-b">{contact.email}</td>
                                <td className="py-2 px-4 border-b">{contact.message.substring(0, 20)}...</td>
                                <td className="py-2 px-4 border-b flex items-center gap-4">
                                    <EyeIcon onClick={() => handleView(contact.message)} className="text-blue-600 cursor-pointer" size={20} />
                                    <TrashIcon onClick={() => handleDelete(contact.id)} className="text-red-600 cursor-pointer ml-2" size={20} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded shadow-lg w-96">
                        <h2 className="text-lg font-bold mb-4">View Message</h2>
                        <p>{currentMessage}</p>
                        <div className="flex justify-end mt-4">
                            <button onClick={closeModal} className="bg-red-500 text-white px-4 py-2 rounded shadow hover:bg-red-400">
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
