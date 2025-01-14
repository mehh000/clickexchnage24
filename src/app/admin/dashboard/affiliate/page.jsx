'use client'


import React, { useState } from 'react';
import { EditIcon } from 'lucide-react';

export default function AffiliatePage() {
    const [affiliateText, setAffiliateText] = useState('Your affiliate text here');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleEdit = () => {
        setIsModalOpen(true);
    };

    const handleSave = () => {
        setIsModalOpen(false);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Affiliate Dashboard</h1>
            <div className="flex items-center justify-between mb-4">
                <p className="text-lg">{affiliateText}</p>
                <EditIcon onClick={handleEdit} className="text-blue-600 cursor-pointer" size={24} />
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded shadow-lg w-96">
                        <h2 className="text-lg font-bold mb-4">Edit Affiliate Text</h2>
                        <textarea 
                            value={affiliateText} 
                            onChange={(e) => setAffiliateText(e.target.value)} 
                            className="mb-2 w-full p-2 border rounded" 
                            placeholder="Edit affiliate text"
                        />
                        <div className="flex justify-end mt-4">
                            <button onClick={handleSave} className="bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-400">
                                Save
                            </button>
                            <button onClick={closeModal} className="bg-red-500 text-white px-4 py-2 rounded shadow hover:bg-red-400 ml-2">
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
