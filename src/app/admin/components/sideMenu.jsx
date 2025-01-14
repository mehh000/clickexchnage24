'use client'

import Link from 'next/link'
import React from 'react'

function SideMenu() {

    const sideMenu = [
        { name: 'Home', href: '/admin/dashboard' },
        { name: 'Exchange Request', href: '/admin/dashboard/exchange-request' },
        { name: 'Currency', href: '/admin/dashboard/currency' },
        { name: 'Live Chat', href: '/admin/dashboard/live-chat' },
        { name: 'Exchange History', href: '/admin/dashboard/exchange-history' },
        { name: 'Messages', href: '/admin/dashboard/messages' },
        { name: 'Users', href: '/admin/dashboard/users' },
        { name: 'Feedbacks', href: '/admin//dashboardfeedbacks' },
        { name: 'Affiliate', href: '/admin/dashboard/affiliate' },
        { name: 'Contact', href: '/admin/dashboard/contact' },
        { name: 'Advice', href: '/admin//dashboardadvice' },

    ]
    return (
    
    <div className=' hidden md:block overflow-x-auto whitespace-nowrap' >
        {/* start the side menu */}
        <div className="h-full w-full pb-3 bg-gray-800 shadow-lg">
            <div className="p-4">
                {/* Sidebar Header */}
                <h2 className="text-white text-lg font-bold mb-4">Admin Panel</h2>
            </div>

            {/* Menu Items */}
            <nav>
                {sideMenu.map((data, i) => (
                    <Link href={data.href} key={i}>
                        <div className="flex items-center gap-2 p-3 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer group">
                            {/* Icon placeholder (optional, replace with icons if available) */}
                            {/* <div className="w-6 h-6 bg-gray-600 rounded group-hover:bg-gray-500"></div> */}
                            <p className="text-white font-medium group-hover:text-orange-400">
                                {data.name}
                            </p>
                        </div>
                    </Link>
                ))}
            </nav>

            {/* Logout Button */}
            <div className=" mx-4">
                <button className="w-full p-2 bg-red-600 text-white rounded-lg font-bold hover:bg-red-700 transition-colors">
                    Log Out
                </button>
            </div>
        </div>
        
    </div>
    )
}

export default SideMenu