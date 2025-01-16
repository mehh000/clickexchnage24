'use client'

import { getExchnageAll } from '@/service/addExchangeData';
import React, { useEffect, useState } from 'react'

const LatestExchangeTable = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5;
  const [data, setData] = useState();

  // get the exchnage data
  useEffect(() => {
    const getExchnages = async () => {
      const data = await getExchnageAll();
      console.log('getting all exchess:', data);
      setData(data);
    };
    getExchnages()
  }, [])

  // Sample data - replace with actual data
  const exchanges = [
    {
      userName: "John Doe",
      time: "2024-01-20 14:30",
      orderId: "ORD001",
      exchange: {
        send: "bKash 1000 BDT",
        receive: "Nagad 950 BDT"
      },
      status: "pending"
    },
    {
      userName: "Jane Smith",
      time: "2024-01-20 14:25",
      orderId: "ORD002",
      exchange: {
        send: "Rocket 2000 BDT",
        receive: "bKash 1900 BDT"
      },
      status: "successful"
    },
    {
      userName: "Mike Johnson",
      time: "2024-01-20 14:20",
      orderId: "ORD003",
      exchange: {
        send: "Nagad 1500 BDT",
        receive: "Rocket 1425 BDT"
      },
      status: "processing"
    }
  ]

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800'
      case 'processing':
        return 'bg-blue-100 text-blue-800'
      case 'successful':
        return 'bg-green-100 text-green-800'
      case 'cancelled':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = exchanges.slice(indexOfFirstItem, indexOfLastItem)
  const totalPages = Math.ceil(exchanges.length / itemsPerPage)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div className="flex flex-col items-center justify-center mt-5 max-w-6xl mx-auto gap-4">
      <div className="overflow-x-auto w-full">
        <table className="w-full bg-white rounded-xl shadow-lg">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Exchange Details</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          {
            data != null ? <tbody className="divide-y divide-gray-200">
            {data.map((exchange, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {exchange.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                2024-01-20 14:20
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {exchange.exchangeId}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  <div className="flex flex-col">
                    <span>Send: bkash</span>
                    <span>Receive: pm</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full }`}>
                  {exchange.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody> : <tbody></tbody>
          }
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-4 gap-2">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 rounded-md bg-gray-100 text-gray-700 disabled:opacity-50"
        >
          Previous
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={`px-3 py-1 rounded-md ${currentPage === index + 1
              ? 'bg-orange-500 text-white'
              : 'bg-gray-100 text-gray-700'
              }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 rounded-md bg-gray-100 text-gray-700 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default LatestExchangeTable
