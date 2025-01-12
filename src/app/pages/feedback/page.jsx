'use client'

import React, { useState } from 'react';
import { Star } from 'lucide-react';

function FeedbackPage() {
  const [feedbacks, setFeedbacks] = useState([
    { username: 'John Doe', text: 'Great service!', rating: 5, date: '2023-10-01' },
    { username: 'Jane Smith', text: 'Very helpful support.', rating: 4, date: '2023-10-02' },
    { username: 'Alice Johnson', text: 'Could improve response time.', rating: 3, date: '2023-10-03' },
  ]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [feedbackText, setFeedbackText] = useState('');
  const [starRating, setStarRating] = useState(0);
  const [username, setUsername] = useState('');

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    const newFeedback = { username, text: feedbackText, rating: starRating, date: new Date().toISOString().split('T')[0] };
    setFeedbacks([...feedbacks, newFeedback]);
    setFeedbackText('');
    setStarRating(0);
    setUsername('');
    setIsFormOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">Feedback</h1>
        
        <button 
          onClick={() => setIsFormOpen(true)} 
          className="mb-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Give Feedback
        </button>

        {isFormOpen && (
          <form onSubmit={handleFeedbackSubmit} className="mb-6">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">Your Name</label>
              <input
                id="username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your name..."
              />
            </div>
            <div className="mt-4">
              <label htmlFor="feedback" className="block text-sm font-medium text-gray-700">Your Feedback</label>
              <textarea
                id="feedback"
                required
                rows="4"
                value={feedbackText}
                onChange={(e) => setFeedbackText(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Share your feedback here..."
              />
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">Star Rating (0-5)</label>
              <input
                type="number"
                min="0"
                max="5"
                value={starRating}
                onChange={(e) => setStarRating(Number(e.target.value))}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              className="mt-4 w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Submit Feedback
            </button>
          </form>
        )}

        <div className="space-y-4">
          {feedbacks.map((feedback, index) => (
            <div key={index} className="p-4 border border-gray-300 rounded-md">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center mr-2">
                  <span className="text-gray-700">{feedback.username.charAt(0)}</span>
                </div>
                <h3 className="text-gray-900 font-semibold">{feedback.username}</h3>
                <span className="ml-2 text-gray-500 text-sm">{feedback.date}</span>
              </div>
              <p className="text-gray-700">{feedback.text}</p>
              <div className="flex items-center">
                <span className="text-gray-500">Rating: {feedback.rating} / 5</span>
                <div className="flex ml-2">
                  {[...Array(feedback.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeedbackPage;
