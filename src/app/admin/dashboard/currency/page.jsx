'use client';

import React, { useState } from 'react';
import { EditIcon, TrashIcon, PlusCircleIcon } from 'lucide-react';
import currencyData from '@/util/data';

const CurrencyPage = () => {
  const [currencies, setCurrencies] = useState(currencyData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentCurrency, setCurrentCurrency] = useState(null);
  const [formData, setFormData] = useState({ name: '', image: '', buyingRate: '', sellingRate: '', reserve: '' });

  const handleOpenModal = (currency = null) => {
    setCurrentCurrency(currency);
    setFormData(currency ? { ...currency } : { name: '', image: '', buyingRate: '', sellingRate: '', reserve: '' });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentCurrency(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentCurrency) {
      setCurrencies(currencies.map((currency) => (currency.id === currentCurrency.id ? formData : currency)));
    } else {
      setCurrencies([...currencies, { ...formData, id: currencies.length + 1 }]);
    }
    handleCloseModal();
  };

  const handleDelete = (id) => {
    setCurrencies(currencies.filter((currency) => currency.id !== id));
  };

  return (
    <div className="p-4 space-y-6">
      <div className="flex justify-end">
        <button
          onClick={() => handleOpenModal()}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          <PlusCircleIcon size={20} />
          Add Currency
        </button>
      </div>

      <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-100 border-b text-gray-700">
            <th className="px-6 py-3 text-left text-sm font-semibold uppercase">Currency</th>
            <th className="px-6 py-3 text-left text-sm font-semibold uppercase">Buying Rate</th>
            <th className="px-6 py-3 text-left text-sm font-semibold uppercase">Selling Rate</th>
            <th className="px-6 py-3 text-left text-sm font-semibold uppercase">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {currencies.map((currency) => (
            <tr key={currency.id} className="hover:bg-gray-50 transition">
              <td className="px-6 py-4 text-gray-900">{currency.name}</td>
              <td className="px-6 py-4 text-gray-700">{currency.buyingRate}</td>
              <td className="px-6 py-4 text-gray-700">{currency.sellingRate}</td>
              <td className="px-6 py-4 text-gray-700 flex items-center gap-4">
                <EditIcon
                  onClick={() => handleOpenModal(currency)}
                  className="w-5 h-5 text-blue-600 cursor-pointer hover:text-blue-800"
                />
                <TrashIcon
                  onClick={() => handleDelete(currency.id)}
                  className="w-5 h-5 text-red-600 cursor-pointer hover:text-red-800"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg relative">
            <h2 className="text-xl font-bold mb-4">
              {currentCurrency ? 'Edit Currency' : 'Add Currency'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Currency Name"
                required
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              />
              <input
                type="text"
                name="image"
                value={formData.image}
                onChange={handleChange}
                placeholder="Image URL"
                required
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              />
              <input
                type="text"
                name="buyingRate"
                value={formData.buyingRate}
                onChange={handleChange}
                placeholder="Buying Rate"
                required
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              />
              <input
                type="text"
                name="sellingRate"
                value={formData.sellingRate}
                onChange={handleChange}
                placeholder="Selling Rate"
                required
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              />
              <input
                type="text"
                name="reserve"
                value={formData.reserve}
                onChange={handleChange}
                placeholder="Reserve"
                required
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              />
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="px-4 py-2 bg-gray-500 text-white rounded-lg shadow hover:bg-gray-600 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
                >
                  {currentCurrency ? 'Update' : 'Add'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CurrencyPage;
