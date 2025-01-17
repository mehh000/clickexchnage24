import { User2 } from 'lucide-react'
import React from 'react'

export default function UserCard() {
    return (
        <div>

            {/* User Chat Quest Card */}
            <div className="flex cursor-pointer flex-row border border-gray-300  p-4 rounded-lg bg-white items-center gap-4">
                {/* User Icon */}
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200">
                    <User2 size={24} className="text-gray-500" />
                </div>

                {/* Chat Content */}
                <div className="flex-1 flex flex-col">
                    {/* User Name and Time */}
                    <div className="flex flex-row justify-between items-center mb-1">
                        <h1 className="font-semibold text-gray-800">Himal Hasan</h1>
                        <p className="text-gray-400 text-xs">2:30 PM</p>
                    </div>
                    {/* Message */}
                    <p className="text-sm text-gray-700">
                        Hi, I would like to know if WebMoney is available?
                    </p>
                </div>
            </div>
        </div>
    )
}
