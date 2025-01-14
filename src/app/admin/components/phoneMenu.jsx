'use client'

import Link from 'next/link'
import React from 'react'

function PhoneMenu({ isToggle, setIsToggle }) {


    const handleToggle = () => {
        setIsToggle(!isToggle);

    }


    const sideMenu = [
        { name: 'Home', href: '/admin/dashboard' },
        { name: 'Exchange Request', href: '/admin/dashboard/exchange-request' },
        { name: 'Currency', href: '/admin/dashboard/currency' },
        { name: 'Live Chat', href: '/admin/dashboard/live-chat' },
        { name: 'Exchange History', href: '/admin/dashboard/exchange-history' },
        { name: 'Messages', href: '/admin/dashboard/messages' },
        { name: 'Users', href: '/admin/dashboard/users' },
        { name: 'Feedbacks', href: '/admin//dashboard/feedbacks' },
        { name: 'Affiliate', href: '/admin/dashboard/affiliate' },
        { name: 'Contact', href: '/admin/dashboard/contact' },
        { name: 'Advice', href: '/admin//dashboardadvice' },

    ]

    return (
        <div>
            {/* Side Drawer Menu */}
            <div className={`fixed inset-y-0 right-0 w-64 z-20 bg-orange-400 transform ${isToggle ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
                <div className="p-4">

                    <buttonon onClick={handleToggle} className="mb-4 text-white">
                        X
                    </buttonon>

                    <div className="flex mt-5 flex-col space-y-4">
                        {
                            sideMenu.map((data, i) => (
                                <div key={i} className="">


                                    <Link href={data.href} className="text-white hover:text-gray-200">
                                        {data.name}
                                    </Link></div>
                            ))
                        }
                        <div className="bg-red-400 w-full p-3 rounded-lg font-semibold text-white  flex items-center justify-center">
                            LogOut
                        </div>





                    </div>
                </div>
            </div>
        </div>
    )
}

export default PhoneMenu