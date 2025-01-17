'use client';

import React, { useEffect, useState } from 'react';
import { EditIcon, TrashIcon, PlusCircleIcon } from 'lucide-react';

import { getAllCurrencyData, updateCurrencyData } from '@/service/getCurrency';

const CurrencyPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentCurrency, setCurrentCurrency] = useState(null);
    const [updateId, setUpdateId] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        image: '',
        buyingRate: '',
        sellingRate: '',
        reserve: '',
    });
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

    const handleOpenModal = (currency = null) => {

        setFormData(currency || { name: '', image: '', buyingRate: '', sellingRate: '', reserve: '' });
        setCurrentCurrency(currency);
        setIsModalOpen(true);

        console.log('the id:', updateId);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setCurrentCurrency(null);

    };
    // This function handles changes in the form inputs. It takes the event object 'e' as an argument.
    // It destructures 'name' and 'value' from 'e.target', which represents the input element that triggered the change.
    // Then, it updates the 'formData' state by spreading the previous state and updating the specific field
    // identified by 'name' with the new 'value'.
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log('Updated Data:', formData); // Log the updated data
        try {
            await updateCurrencyData(updateId, formData);
            console.log('Currency updated successfully');
        } catch (error) {
            console.log('Failed to add because:', error);
        } finally {
            handleCloseModal();
        }
    };



    return (
        <div className="p-4 space-y-6">
            <div className="flex justify-end">
                <button
                    disabled
                    onClick={() => handleOpenModal()}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
                >
                    <PlusCircleIcon size={20} />
                    Add Currency
                </button>
            </div>
            {reserveData.length > 0 ? (
                <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
                    <thead>
                        <tr className="bg-orange-400 border-b text-white">
                            <th className="px-6 py-3 text-left text-sm font-semibold uppercase">Currency</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold uppercase">Buying Rate</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold uppercase">Selling Rate</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold uppercase">Reserve Rate</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold uppercase">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {reserveData.map((currency) => (
                            <tr key={currency.id} className="hover:bg-gray-50 transition">
                                <td className="px-6 py-4 text-gray-900">{currency.name}</td>
                                <td className="px-6 py-4 text-gray-700">{currency.buyingrate}</td>
                                <td className="px-6 py-4 text-gray-700">{currency.sellingrate}</td>
                                <td className="px-6 py-4 text-gray-700">{currency.reserve}</td>
                                <td className="px-6 py-4 text-gray-700 flex items-center gap-4">
                                    <EditIcon
                                        onClick={() => {
                                            handleOpenModal(currency)
                                            setUpdateId(currency.id)
                                        }
                                        }
                                        className="w-5 h-5 text-blue-600 cursor-pointer hover:text-blue-800"
                                    />

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>Loading...</p>
            )}

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg relative">
                        <h2 className="text-xl font-bold mb-4">
                            {currentCurrency ? 'Edit Currency' : 'Add Currency'}
                            <p className="">
                                {updateId ? updateId : ''}
                            </p>
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input
                                type="text"
                                name="id"
                                value={formData.id || ''}
                                onChange={handleChange}
                                placeholder="Currency Name"
                                required
                                readOnly
                                className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                            />
                            <label htmlFor="">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name || ''}
                                onChange={handleChange}
                                placeholder="Currency Name"
                                required
                                className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                            />
                            <label htmlFor="">Image</label>
                            <input
                                type="text"
                                name="image"
                                value={formData.image || ''}
                                onChange={handleChange}
                                placeholder="Image URL"
                                required
                                className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                            />
                            <label htmlFor="">Buying rate</label>
                            <input
                                type="text"
                                name="buyingrate"
                                value={formData.buyingrate || ''}
                                onChange={handleChange}
                                placeholder="Buying Rate"
                                required
                                className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                            />
                            <label htmlFor="">Selling rate</label>
                            <input
                                type="text"
                                name="sellingrate"
                                value={formData.sellingrate || ''}
                                onChange={handleChange}
                                placeholder="Selling Rate"
                                required
                                className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                            />
                            <label htmlFor="">In stock amount</label>
                            <input
                                type="text"
                                name="reserve"
                                value={formData.reserve || ''}
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
