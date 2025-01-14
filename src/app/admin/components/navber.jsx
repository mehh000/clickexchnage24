'use client'

import Link from 'next/link'

import { BellIcon, MenuIcon } from 'lucide-react'

function Navber({ handleToggle }) {




    return (
        <div className=" fixed w-full">  
        <div className="bg-orange-400 h-16 flex items-center justify-between">
            <Link href="/" className="text-2xl pl-5 font-bold text-white">
                <span className="text-blue-600">Click</span>
                <span className="text-green-600">Exchange</span>
                <span className="text-red-500">24</span>
            </Link>

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