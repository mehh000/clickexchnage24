'use client'

import React, { useState } from 'react'
import { Languages } from 'lucide-react'

function AffiliatePage() {
  const [language, setLanguage] = useState('en')

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'bn' : 'en')
  }

  const content = {
    en: {
      title: "ClickExchange24 Affiliate Program",
      description: `Welcome to the ClickExchange24 Affiliate Program! Earn rewards effortlessly by sharing your referral code with others. Here's how it works:`,
      points: [
        "When someone joins ClickExchange24 using your referral code, you will receive 1% of their exchange amount as a reward.",
        "Your earnings will accumulate automatically in your affiliate account.",
        "You can withdraw your earnings at any time with no minimum limit."
      ],
      cta: "Start earning today by sharing your referral code with friends, family, and followers. It's a simple and effective way to earn passive income with ClickExchange24!"
    },
    bn: {
      title: "ক্লিকএক্সচেঞ্জ২৪ অ্যাফিলিয়েট প্রোগ্রাম",
      description: "ক্লিকএক্সচেঞ্জ২৪ অ্যাফিলিয়েট প্রোগ্রামে আপনাকে স্বাগতম! সহজেই আপনার রেফারেল কোড শেয়ার করে পুরস্কার অর্জন করুন। এটি কীভাবে কাজ করে:",
      points: [
        "কেউ আপনার রেফারেল কোড ব্যবহার করে ক্লিকএক্সচেঞ্জ২৪-এ যোগ দিলে, আপনি তার এক্সচেঞ্জের ১% রিওয়ার্ড হিসেবে পাবেন।",
        "আপনার আয়ের পরিমাণ স্বয়ংক্রিয়ভাবে আপনার অ্যাফিলিয়েট অ্যাকাউন্টে জমা হবে।",
        "আপনি আপনার আয় যে কোনো সময়ে উত্তোলন করতে পারবেন, কোনো ন্যূনতম সীমা ছাড়াই।"
      ],
      cta: "আজই আপনার রেফারেল কোড বন্ধু, পরিবার এবং ফলোয়ারদের সাথে শেয়ার করে আয় শুরু করুন। ক্লিকএক্সচেঞ্জ২৪-এর মাধ্যমে প্যাসিভ আয় করার সহজ এবং কার্যকর উপায়!"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-end mb-4">
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-2 bg-orange-400 text-white px-4 py-2 rounded-md hover:bg-orange-500 transition-colors"
          >
            <Languages className="text-xl" />
            {language === 'en' ? 'বাংলা' : 'English'}
          </button>
        </div>
        
        <div className="bg-white shadow-xl rounded-lg p-8">
          <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
            {content[language].title}
          </h1>
          
          <p className="text-lg text-gray-700 mb-6">
            {content[language].description}
          </p>
          
          <ul className="space-y-4 mb-6">
            {content[language].points.map((point, index) => (
              <li key={index} className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-orange-400 text-white text-sm mr-3 mt-0.5">
                  {index + 1}
                </span>
                <span className="text-gray-700">{point}</span>
              </li>
            ))}
          </ul>
          
          <p className="text-lg text-gray-700 font-medium">
            {content[language].cta}
          </p>
        </div>
      </div>
    </div>
  )
}

export default AffiliatePage
