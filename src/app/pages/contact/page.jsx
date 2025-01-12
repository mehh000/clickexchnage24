'use client'

import React from 'react';
import Link from 'next/link';

import { Facebook } from 'lucide-react';
import { Youtube } from 'lucide-react';

function ContactUsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Contact Us
        </h1>
        <p className="text-lg text-gray-700 mb-6 text-center">
          We would love to hear from you! Please reach out with any questions or feedback.
        </p>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows="4"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your Message"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Send Message
          </button>
        </form>
        <div className="mt-8 text-center">
          <h2 className="text-lg font-semibold text-gray-900">Follow Us</h2>
          <div className="flex justify-center space-x-4 mt-4">
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
              <Facebook size={24} />
            </Link>
            <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-red-600">
              <Youtube size={24} />
            </Link>
            <Link href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-400">
              <p className="">Telegram</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUsPage;
