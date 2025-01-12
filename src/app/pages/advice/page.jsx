'use client'

import React, { useState } from 'react';

function AdvicePage() {
  const [advice, setAdvice] = useState('');

  const handleAdviceChange = (e) => {
    setAdvice(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the submission, e.g., send the advice to a server
    console.log('Advice submitted:', advice);
    setAdvice(''); // Clear the input after submission
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
          We Value Your Advice!
        </h1>
        <p className="text-lg text-gray-700 mb-6 text-center">
          Please share your thoughts on how we can improve our website. Your feedback is important to us!
        </p>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="advice" className="block text-sm font-medium text-gray-700">
              Your Advice
            </label>
            <textarea
              id="advice"
              name="advice"
              required
              rows="4"
              value={advice}
              onChange={handleAdviceChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Share your advice here..."
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Submit Advice
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdvicePage;
