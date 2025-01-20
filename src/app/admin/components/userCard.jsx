'use client'


import { User2, UserIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function UserCard({ request }) {
   // console.log('from the userCard', request)
    return (
        <div className="flex items-center p-4 border rounded-lg shadow-md bg-white">
            <UserIcon size={40} className="text-gray-500 mr-4" />
            <div className="flex-1">
                <Link href={`/admin/dashboard/chat/livechat/${request.id}`} className="flex justify-between">
                    <span className="font-semibold">Himal</span>
                    <span className="text-gray-500">12:11</span>
                </Link>
                <div className="flex justify-between">
                    <span className="text-gray-700">hi sir</span>

                    <span className="bg-red-500 text-white h-fit rounded-full px-2">1</span>

                </div>
            </div>
        </div>
    )
}
