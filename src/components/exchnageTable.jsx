'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import currencyData from '@/util/data'
import { getAllCurrencyData } from '@/service/getCurrency'

const ExchangeTable = () => {

  const [reserveData, setReserveData] = useState([]);

  useEffect(() => {
      const getReserveData = async () => {
          try {
              const data = await getAllCurrencyData();
              console.log('Fetched currency data:', data);
              setReserveData(data);
          } catch (error) {
              console.log('Error fetching data:', error);
          }
      };

      getReserveData();
  }, []);


  return (
    <div className=" overflow-x-auto">
      <table className="min-w-full bg-white rounded-xl shadow-lg">
        <thead>
          <tr className="bg-orange-400 border-b">
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Currency</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Buying</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Selling</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Reserve</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
         {
          reserveData ?  (reserveData.map((currency, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10 relative">
                    <Image
                      src={currency.image}
                      alt={currency.name}
                      width={40} // Specify width
                      height={40} // Specify height
                      className="rounded-full"
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">{currency.name}</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {currency.buyingrate}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {currency.sellingrate}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {currency.reserve}
              </td>
            </tr>
          ))) : 'loading'
         }
        </tbody>
      </table>
    </div>
  )
}

export default ExchangeTable