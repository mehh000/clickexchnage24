'use client'

import { getMessage } from '@/app/admin/service/getMessage';
import React, { useEffect, useState } from 'react'

function Message() {

    const [adminMessage, setAdminMessage] = useState()

    useEffect(() => {
        const getMessagesFromDB = async () => {
            try {
                const response = await getMessage();
                setAdminMessage(response[0])
                //  console.log('Messages fetched:', response[0]);

            } catch (error) {
                console.error('Error fetching messages:', error); // Log any errors that occur
            }
        };

        getMessagesFromDB();
    }, []);
    return (
        <div className="bg-gradient-to-r from-blue-100 via-pink-100 to-yellow-100 p-4 w-full h-[350px] flex items-start justify-center gap-10 flex-row">
            {/* admin mess message */}
            <div className="bg-white rounded-xl  p-6 sm:p-8 border border-gray-200 hover:border-gray-300 transition-colors">
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                    {adminMessage != null ? adminMessage.adminMessage : 'No messages yet'}
                </p>
            </div>

            {/* working hours detilas  */}
            <div className="bg-white rounded-xl h-full p-6 border border-gray-200 hidden md:block">
                <div className="flex h-full justify-around flex-col gap-3">
                    <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">Working Time: 9AM - 12PM</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">Working Days: Sun - Fri</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-400" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                        <span className="text-gray-700">Hotline: 019999999999</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message