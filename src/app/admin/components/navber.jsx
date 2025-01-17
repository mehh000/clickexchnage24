'use client'

import Link from 'next/link'

import { BellIcon, MenuIcon } from 'lucide-react'
import { useContext, useEffect, useState } from 'react'
import { getWebStatus, updateWebStatus } from '@/service/getWebstatus';
import { userContext } from '@/context/userContext';

function Navber({ handleToggle }) {

    const { isOnline,handleWebsiteOn} = useContext(userContext)




    return (
        <div className=" fixed w-full">
            <div className="bg-orange-400 h-16 flex items-center gap-10 justify-center">
                <div className="text-2xl mr-10 pl-5 font-bold ">
                    <span className="text-blue-600">Click</span>
                    <span className="text-green-600">Exchange</span>
                    <span className="text-red-500">24</span>
                </div>

                {/* Online/Offline Toggle */}
                <button
                    onClick={handleWebsiteOn}
                    className={`p-3 rounded-lg font-semibold text-white hidden md:block transition-colors duration-300 ${isOnline ? 'bg-green-500 hover:bg-green-600' : 'bg-red-500 hover:bg-red-600'
                        }`}
                >
                    {isOnline ? 'ON' : 'OFF'}
                </button>

                <div className="flex pr-5 items-center justify-center gap-5 ">
                    <BellIcon size={24} color='white' />
                    <div className=" md:hidden block">
                        <MenuIcon onClick={handleToggle} size={24} color='white' />
                    </div>
                </div>
            </div> </div>
    )
}

export default Navber