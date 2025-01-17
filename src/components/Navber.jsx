'use client';

import React, { useState, useEffect, useCallback, memo, useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, CircleUser } from 'lucide-react';
import { userContext } from '@/context/userContext';
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from 'next/navigation';


const Navber = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBlinking, setIsBlinking] = useState(true);
  const [isUserIconActive, setIsUserIconActive] = useState(false);
  const router = useRouter();
  const { user, isOnline } = useContext(userContext);


  // Toggle Menu
  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  // Toggle User Icon
  const toggleUserIcon = useCallback(() => {
    setIsUserIconActive((prev) => !prev);
  }, []);

  // Blinking indicator
  useEffect(() => {
    const interval = setInterval(() => {
      setIsBlinking((prev) => !prev);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const auth = getAuth(); // Get the Firebase Auth instance

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push('/pages/auth/login')
      // Redirect or handle post-logout actions here
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };


  return (
    <nav className="w-full bg-orange-400 shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <Link href="/" className="text-2xl font-bold text-white">
              <span className="text-blue-600">Click</span>
              <span className="text-green-600">Exchange</span>
              <span className="text-red-500">24</span>
            </Link>
            {
              isOnline ? <div
                className={`h-4 w-4 rounded-full ${isBlinking ? 'bg-green-500' : 'bg-gray-300'
                  } transition-colors duration-500`}></div> : <div className="h-4 w-4 rounded-full bg-gray-500"></div>
            }

          </div>

          {/* Menu Icon for Mobile */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white">
              <Menu size={24} />
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/pages/affiliate" className="text-white hover:text-gray-200">
              Affiliate
            </Link>
            <Link href="/pages/feedback" className="text-white hover:text-gray-200">
              FeedBack
            </Link>
            <Link href="/news" className="text-white hover:text-gray-200">
              News
            </Link>
            <Link href="/pages/contact" className="text-white hover:text-gray-200">
              Contact Us
            </Link>
            <Link href="/pages/advice" className="text-white hover:text-gray-200">
              Advice
            </Link>
          </div>

          {/* Login Button */}
          <div className="hidden md:block">
            {user == null ? (
              <Link href={'/pages/auth/login'}>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
                  Login
                </button>
              </Link>
            ) : (
              <button
                onClick={toggleUserIcon}
                className="bg-blue-600 text-white px-2 py-2 rounded-full hover:bg-blue-700"
              >
                <CircleUser size={24} />
              </button>
            )}

            {isUserIconActive && (
              <div className="absolute right-0 mt-4 w-48 bg-white shadow-lg rounded-md z-10">
                <p className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                  {user != null ? user.fullName : 'name'}
                </p>
                <Link href="/pages/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                  Profile
                </Link>

                <Link href="/pages/settings" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                  Settings
                </Link>
                <Link href="/pages/my-exchange" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                  My Exchange
                </Link>
                <Link href="/pages/feedback" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                  My FeedBacks
                </Link>
                <button onClick={handleLogout} className="block w-full px-4 py-2 text-red-600 hover:bg-red-100">
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Side Drawer Menu */}
        <div
          className={`fixed inset-y-0 right-0 w-64 z-20 bg-orange-400 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            } transition-transform duration-300 ease-in-out md:hidden`}
        >
          <div className="p-4">
            <button onClick={toggleMenu} className="mb-4 text-white">
              <X size={24} />
            </button>
            <div className="flex flex-col space-y-4">
              <Link href="/pages/affiliate" className="text-white hover:text-gray-200">
                Affiliate
              </Link>
              <Link href="/pages/feedback" className="text-white hover:text-gray-200">
                FeedBack
              </Link>
              <Link href="/news" className="text-white hover:text-gray-200">
                News
              </Link>
              <Link href="/pages/contact" className="text-white hover:text-gray-200">
                Contact Us
              </Link>
              <Link href="/pages/advice" className="text-white hover:text-gray-200">
                Advice
              </Link>
              <Link href={'/pages/auth/login'}>

                {user == null && <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 w-full">Login </button>}

              </Link>

              {
                user != null && (<div className="flex flex-col space-y-4">
                  <p className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    {user != null ? user.fullName : 'name'}
                  </p>
                  <Link href="/pages/advice" className="text-white hover:text-gray-200">

                    Profile
                  </Link>
                  <Link href="/pages/advice" className="text-white hover:text-gray-200">

                    Settings
                  </Link>
                  <Link href="/pages/advice" className="text-white hover:text-gray-200">

                    My Exchange
                  </Link>
                  <Link href="/pages/feedback" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    My FeedBacks
                  </Link>
                  <button onClick={handleLogout} className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 w-full flex justify-center">
                    Logout
                  </button>
                </div>)
              }
            </div>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default memo(Navber);
