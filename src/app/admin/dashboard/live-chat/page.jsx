'use client'



import React, { useState } from 'react';
import { UserIcon } from 'lucide-react';
import Link from 'next/link';

const demoChatRequests = [
    { id: 1, username: 'User1', time: '10:00 AM', message: 'Hello, I would like to know more about your services.', unread: 2 },
    { id: 2, username: 'User2', time: '10:05 AM', message: 'Can you provide me with the latest updates?', unread: 1 },
    { id: 3, username: 'User3', time: '10:10 AM', message: 'I have a question regarding my account.', unread: 0 },
    { id: 4, username: 'User4', time: '10:15 AM', message: 'What are your business hours?', unread: 3 },
    { id: 5, username: 'User5', time: '10:20 AM', message: 'I would like to schedule a meeting.', unread: 0 },
    { id: 6, username: 'User6', time: '10:25 AM', message: 'Can you help me with my order?', unread: 1 },
    { id: 7, username: 'User7', time: '10:30 AM', message: 'I need assistance with my account.', unread: 0 },
    { id: 8, username: 'User8', time: '10:35 AM', message: 'What payment methods do you accept?', unread: 2 },
    { id: 9, username: 'User9', time: '10:40 AM', message: 'Can I get a refund for my last purchase?', unread: 1 },
    { id: 10, username: 'User10', time: '10:45 AM', message: 'I would like to change my subscription plan.', unread: 0 },
];

export default function LiveChatPage() {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredChatRequests = demoChatRequests.filter(request =>
        request.username.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Chat Requests</h1>
            <input
                type="text"
                placeholder="Search by username..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="mb-4 p-2 border rounded w-full"
            />
            <Link href={'/admin/dashboard/chat'}> 
            <div className="space-y-4">
                {filteredChatRequests.map(request => (
                    <div key={request.id} className="flex items-center p-4 border rounded-lg shadow-md bg-white">
                        <UserIcon size={40} className="text-gray-500 mr-4" />
                        <div className="flex-1">
                            <div className="flex justify-between">
                                <span className="font-semibold">{request.username}</span>
                                <span className="text-gray-500">{request.time}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-700">{request.message.substring(0, 30)}...</span>
                                {request.unread > 0 && (
                                    <span className="bg-red-500 text-white h-fit rounded-full px-2">{request.unread}</span>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div></Link>
        </div>
    );
}
