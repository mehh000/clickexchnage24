'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { getAllCurrencyData } from '@/service/getCurrency'

const ReserveTable = () => {

  const [reserveData, setReserveData] = useState([]);

  useEffect(() => {
    const getReserveData = async () => {
      try {
        const data = await getAllCurrencyData();
     //   console.log('from reserve table', data);
        setReserveData(data);
      } catch (error) {
        console.log(error);
      }
    };

    getReserveData();
  }, [])

  return (
    <div className="overflow-x-auto mt-5">
      <table className="min-w-full bg-white rounded-xl shadow-lg">
        <thead>
          <tr className="bg-gray-100 border-b">
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Currency</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reserve</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {reserveData.length > 0 ? reserveData.map((currency, index) => (
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
                {currency.reserve}
              </td>
            </tr>
          )) : (
            <tr>
              <td colSpan="2" className="px-6 py-4 text-center text-gray-500">No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default ReserveTable
