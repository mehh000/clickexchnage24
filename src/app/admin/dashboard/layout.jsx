'use client';

import React, { useContext, useEffect, useState } from 'react';
import Navber from '../components/navber';
import SideMenu from '../components/sideMenu';
import PhoneMenu from '../components/phoneMenu';
import { useRouter } from 'next/navigation';
import { userContext } from '@/context/userContext';

function AdminLayout({ children }) {
    const [isToggle, setIsToggle] = useState(false);
    const router = useRouter();
    const { user } = useContext(userContext)

    const handleToggle = () => {
        setIsToggle(!isToggle);
        console.log(isToggle);
    };

    
    // Check user role and redirect if not an admin
    useEffect(() => {
        if (user?.roll === 'user') {
            router.push('/admin/auth/login');
        }
    }, [user, router]);


  

    return (
        <div className="flex h-screen bg-gray-100">
            <Navber handleToggle={handleToggle} />
            <div className={`fixed md:block hidden md:w-64 w-0`}>
                <SideMenu handleToggle={handleToggle} />

            </div>
            <PhoneMenu isToggle={isToggle} setIsToggle={setIsToggle} />
            <div className="flex-1 bg-white md:ml-64 ml-0 mt-16 pt-4  overflow-y-auto">
                {children}
            </div>
        </div>
    );
}

export default AdminLayout;
