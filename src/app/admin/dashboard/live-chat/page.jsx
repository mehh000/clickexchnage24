'use client'



import React, { useContext, useEffect, useState } from 'react';
import { UserIcon } from 'lucide-react';
import Link from 'next/link';
import { userContext } from '@/context/userContext';
import { getChatsWithMessages } from '@/service/globalChat';
import UserCard from '../../components/userCard';


export default function LiveChatPage() {
    const [searchTerm, setSearchTerm] = useState('');




    const { user } = useContext(userContext);
    const [messageObject, setMessageObject] = useState(null); // Null to handle initial loading state

    const fetchChatDocument = async () => {
        try {
            if (user?.id) {
                const chatDoc = await getChatsWithMessages(user.id);
              //  console.log("Fetched chats:", chatDoc);
                setMessageObject(chatDoc);
            } else {
             //   console.log("User ID is not available.");
            }
        } catch (error) {
            console.error("Error fetching chat document:", error);
        }
    };



    useEffect(() => {
        fetchChatDocument();
    }, [user?.id]); // Add user.id as a dependency


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

            <div className="space-y-4">
                {messageObject != null ? (
                    messageObject.map(request => (

                        <UserCard key={request.id} request={request} />


                    ))
                ) : 'loading'}
            </div>
        </div>
    );
}
