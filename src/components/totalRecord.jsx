'use client'

import React from 'react'
import { Users, ArrowLeftRight, TrendingUp, Users2 } from 'lucide-react'

const TotalRecord = () => {
  // Sample data - replace with actual data
  const stats = [
    {
      title: "Total Users",
      value: "5,234",
      icon: Users,
      color: "bg-blue-500"
    },
    {
      title: "Total Exchanges", 
      value: "12,543",
      icon: ArrowLeftRight,
      color: "bg-green-500"
    },
    {
      title: "Today's Exchanges",
      value: "234",
      icon: TrendingUp, 
      color: "bg-orange-500"
    },
    {
      title: "Affiliate Members",
      value: "432",
      icon: Users2,
      color: "bg-purple-500" 
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div 
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 transition-transform hover:scale-105"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <p className="mt-2 text-3xl font-semibold text-gray-900">{stat.value}</p>
              </div>
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm text-green-600">
                <TrendingUp className="w-4 h-4 mr-1" />
                <span>12% increase</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TotalRecord
