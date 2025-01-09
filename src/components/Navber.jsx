'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

function Navber() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isBlinking, setIsBlinking] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsBlinking(prev => !prev)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="w-full bg-orange-400 shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <Link href="/" className="text-2xl font-bold text-white">
              ClickExchange24
            </Link>
            <div className={`h-4 w-4 rounded-full ${isBlinking ? 'bg-green-500' : 'bg-gray-300'} transition-colors duration-500`}></div>
          </div>

          {/* Menu Icon for Mobile */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white">
              <Menu size={24} />
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/affiliate" className="text-white hover:text-gray-200">Affiliate</Link>
            <Link href="/testimonial" className="text-white hover:text-gray-200">Testimonial</Link>
            <Link href="/news" className="text-white hover:text-gray-200">News</Link>
            <Link href="/contact" className="text-white hover:text-gray-200">Contact Us</Link>
            <Link href="/advice" className="text-white hover:text-gray-200">Advice</Link>
          </div>

          {/* Login Button */}
          <div className="hidden md:block">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
              Login
            </button>
          </div>
        </div>

        {/* Side Drawer Menu */}
        <div className={`fixed inset-y-0 right-0 w-64 bg-orange-400 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
          <div className="p-4">
            <button onClick={toggleMenu} className="mb-4 text-white">
              <X size={24} />
            </button>
            <div className="flex flex-col space-y-4">
              <Link href="/affiliate" className="text-white hover:text-gray-200">Affiliate</Link>
              <Link href="/testimonial" className="text-white hover:text-gray-200">Testimonial</Link>
              <Link href="/news" className="text-white hover:text-gray-200">News</Link>
              <Link href="/contact" className="text-white hover:text-gray-200">Contact Us</Link>
              <Link href="/advice" className="text-white hover:text-gray-200">Advice</Link>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 w-full">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navber