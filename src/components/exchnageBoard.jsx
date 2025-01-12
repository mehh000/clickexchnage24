'use client'

import React, { useState } from 'react'
import { ArrowLeftRight, ArrowDown } from 'lucide-react'

function ExchangeBoard() {
  const [sendMethod, setSendMethod] = useState('bKash')
  const [receiveMethod, setReceiveMethod] = useState('Nagad')
  const [sendAmount, setSendAmount] = useState('')
  const [receiveAmount, setReceiveAmount] = useState('')

  const paymentMethods = [
    'bKash',
    'Nagad', 
    'Binance',
    'Payeer',
    'Neteller',
    'Skrill',
    'WebMoney',
    'TON',
    'Payoneer'
  ]

  const handleExchange = (e) => {
    e.preventDefault()
    // Handle exchange logic here
  }

  return (
    <div className="relative w-full">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/bg_image.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-2xl mx-auto p-4 sm:p-6">
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-8 border border-gray-200">
          <form onSubmit={handleExchange}>
            <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-4">
              <div className="flex-1 w-full">
                <select
                  value={sendMethod}
                  onChange={(e) => setSendMethod(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
                >
                  {paymentMethods.map((method) => (
                    <option key={method} value={method}>
                      {method}
                    </option>
                  ))}
                </select>
                <div className="mt-4">
                  <label htmlFor="send-amount" className="block text-sm font-medium text-gray-700 mb-1">
                    Send
                  </label>
                  <input
                    id="send-amount"
                    type="number"
                    value={sendAmount}
                    onChange={(e) => setSendAmount(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
                    placeholder="Enter amount"
                    required
                  />
                </div>
              </div>

              <div className="flex justify-center my-4 md:my-0">
                <ArrowLeftRight className="hidden md:block text-orange-400" size={24} />
                <ArrowDown className="md:hidden text-orange-400" size={24} />
              </div>

              <div className="flex-1 w-full">
                <select
                  value={receiveMethod}
                  onChange={(e) => setReceiveMethod(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
                >
                  {paymentMethods.map((method) => (
                    <option key={method} value={method}>
                      {method}
                    </option>
                  ))}
                </select>
                <div className="mt-4">
                  <label htmlFor="receive-amount" className="block text-sm font-medium text-gray-700 mb-1">
                    Receive
                  </label>
                  <input
                    id="receive-amount"
                    type="number"
                    value={receiveAmount}
                    onChange={(e) => setReceiveAmount(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
                    placeholder="Enter amount"
                    readOnly
                  />
                  <p className="text-gray-500">Recive: 222</p>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-6 bg-orange-400 text-white py-3 px-6 rounded-lg hover:bg-orange-500 transition-colors font-medium"
            >
              Exchange Now
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ExchangeBoard
