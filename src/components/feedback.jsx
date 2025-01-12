'use client'

import React, { useState } from 'react'
import { Star, ChevronLeft, ChevronRight, User } from 'lucide-react'

const Feedback = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Sample feedback data
  const feedbacks = [
    {
      name: "John Doe",
      message: "Great service! Very fast and reliable exchange. I'm really impressed with the rates and customer support.",
      date: "2024-01-15",
      rating: 5
    },
    {
      name: "Sarah Smith", 
      message: "Excellent platform for digital currency exchange. The process was smooth and hassle-free.",
      date: "2024-01-14",
      rating: 4
    },
    {
      name: "Mike Johnson",
      message: "Best exchange rates I've found. Will definitely use again!",
      date: "2024-01-13", 
      rating: 5
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === feedbacks.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? feedbacks.length - 1 : prev - 1))
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Customer Feedback</h2>
        <button className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
          View All
        </button>
      </div>

      <div className="relative">
        <div className="overflow-hidden rounded-xl shadow-lg bg-white p-6">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-gray-100 rounded-full">
              <User className="w-8 h-8 text-gray-600" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-lg">{feedbacks[currentSlide].name}</h3>
                <span className="text-sm text-gray-500">{feedbacks[currentSlide].date}</span>
              </div>
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    className={`w-5 h-5 ${
                      index < feedbacks[currentSlide].rating
                        ? 'text-yellow-400 fill-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <p className="text-gray-600">{feedbacks[currentSlide].message}</p>
            </div>
          </div>
        </div>

        <button 
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>

        <button 
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50"
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>
      </div>

      <div className="flex justify-center gap-2 mt-4">
        {feedbacks.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${
              currentSlide === index ? 'bg-orange-500' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default Feedback
