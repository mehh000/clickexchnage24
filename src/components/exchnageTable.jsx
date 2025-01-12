'use client'

import React from 'react'
import Image from 'next/image'
import currencyData from '@/util/data'

const ExchangeTable = () => {


  return (
    <div className=" overflow-x-auto">
      <table className="min-w-full bg-white rounded-xl shadow-lg">
        <thead>
          <tr className="bg-gray-100 border-b">
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Currency</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Buying</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Selling</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {currencyData.map((currency, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10 relative">
                    <Image
                      src={currency.image}
                      alt={currency.name}
                      fill
                      className="rounded-full"
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">{currency.name}</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {currency.buyingRate}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {currency.sellingRate}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ExchangeTable