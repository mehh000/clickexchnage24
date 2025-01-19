'use client';

import React, { useContext, useEffect, useState } from 'react';
import { User2 } from 'lucide-react';
import UserCard from './component/userCard';
import { userContext } from '@/context/userContext';
import { getMessages } from '@/service/livechat';

function ChatRequest() {
  const { user } = useContext(userContext);
  const [messageObject, setMessageObject] = useState(null); // Null to handle initial loading state

  useEffect(() => {
    const handleGetMessageUser = async () => {
      if (user?.id) { // Check if user and user.id exist
        try {
          const data = await getMessages(user.id);
          setMessageObject(data);
          console.log('Chat request user:', data);
        } catch (error) {
          console.log('Failed to fetch messages:', error);
        }
      }
    };

    handleGetMessageUser();
  }, [user?.id]); // Add user.id as a dependency

  console.log('cheakin messagearyy' , messageObject);

  return (
    <div className="bg-white w-full h-full p-4">
      <div className="flex items-start flex-col gap-2">
         {/* {
          messageObject.length != 0 ?
            (
              messageObject.map((data,i) => (
                <div className="" key={i}>
                   <p className="">
                    {data.message.input}
                   </p>
                </div>
             
              ))
            )
            : <p className="">not found</p>
         } */}
             
          
      </div>
    </div>
  );
}

export default ChatRequest;
