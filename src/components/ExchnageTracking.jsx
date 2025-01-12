'use client'

import React from 'react'

function ExchangeTracking() {
    return (
        <div className="  max-w-4xl  px-4 sm:px-6 lg:px-8 py-8">
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 border border-gray-200">
                <div className="flex flex-col items-center gap-4">
                    <input 
                        type="text"
                        placeholder="Enter your exchange ID"
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                    />
                    <button className="w-full sm:w-auto px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2">
                        Track Exchange
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ExchangeTracking
