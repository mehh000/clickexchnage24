'use client';

import React, { useEffect, useState } from 'react';
import { EditIcon, TrashIcon, ImageIcon } from 'lucide-react';
import { getExchnageAll, updateExchnage } from '@/service/addExchangeData';
import Link from 'next/link';

export default function ExchangeRequestPage() {
    const [data, setData] = useState([]);
    const [requests, setRequests] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentRequest, setCurrentRequest] = useState(null);
    const [filter, setFilter] = useState('pending');
    const [filteredRequests, setFilteredRequests] = useState([]);

    // Fetch exchange data
    useEffect(() => {
        const getExchanges = async () => {
            const response = await getExchnageAll();
            console.log('Fetching all exchanges:', response);
            setData(response);
            setRequests(response);
            setFilteredRequests(response.filter((req) => req.status === 'pending'));
        };
        getExchanges();
    }, []);

    const handleEdit = (request) => {
        setCurrentRequest(request);
        setIsModalOpen(true);
    };

    const handleSave = async () => {
        try {
            await updateExchnage(currentRequest.id,currentRequest);
            console.log('chnage succesfull done')
            
        } catch (error) {
            console.log(first)
        }
        console.log('cheaking the save changes',currentRequest)
        // setIsModalOpen(false);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setCurrentRequest(null);
    };

    const handleFilterChange = (status) => {
        setFilter(status);
        setFilteredRequests(requests.filter((req) => status === 'all' || req.status === status));
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Exchange Requests</h1>

            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b">Username</th>
                            <th className="py-2 px-4 border-b">Exchange ID</th>
                            <th className="py-2 px-4 border-b">Sending</th>
                            <th className="py-2 px-4 border-b">Receiving</th>
                            <th className="py-2 px-4 border-b">Exchange</th>
                            <th className="py-2 px-4 border-b">TRXID</th>
                            <th className="py-2 px-4 border-b">Status</th>
                            <th className="py-2 px-4 border-b">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.length > 0 ? (
                            data.map((request) => (
                                <tr key={request.id}>
                                    <td className="py-2 px-4 border-b">{request.name}</td>
                                    <td className="py-2 px-4 border-b">{request.exchangeId}</td>
                                    <td className="py-2 px-4 border-b">{request.sendAmount}</td>
                                    <td className="py-2 px-4 border-b">{request.receiveAmount}</td>
                                    <td className="py-2 px-4 border-b">
                                        {request.SendMethod} to {request.ReciveMethod}
                                    </td>
                                    <td className="py-2 px-4 border-b">{request.trxID}</td>
                                    <td className="py-2 px-4 border-b">{request.status}</td>
                                    <td className="py-2 px-4 border-b flex items-center gap-4">
                                        <EditIcon
                                            onClick={() => handleEdit(request)}
                                            className="text-blue-600 cursor-pointer"
                                            size={20}
                                        />
                                        <Link href={request.paymentImage} >
                                            <ImageIcon className="text-red-600 cursor-pointer" size={20} />
                                        </Link>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="7" className="text-center py-4">No requests found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {isModalOpen && currentRequest && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded shadow-lg w-96">
                        <h2 className="text-lg font-bold mb-4">Edit Request</h2>
                        <div className="mb-2">
                            <strong>Username:</strong> {currentRequest.name}
                        </div>
                        <div className="mb-2">
                            <strong>Exchange ID:</strong> {currentRequest.exchangeId}
                        </div>
                        <div className="mb-2">
                            <strong>Sending Method:</strong> {currentRequest.SendMethod}
                        </div>
                        <div className="mb-2">
                            <strong>Receiving Method:</strong> {currentRequest.ReciveMethod}
                        </div>
                        <select
                            value={currentRequest.status}
                            onChange={(e) => setCurrentRequest({ ...currentRequest, status: e.target.value })}
                            className="mb-2 w-full p-2 border rounded"
                        >
                            <option value="pending">Pending</option>
                            <option value="processing">Processing</option>
                            <option value="success">Success</option>
                        </select>
                        <div className="flex justify-end mt-4">
                            <button
                                onClick={handleSave}
                                className="bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-400"
                            >
                                Save
                            </button>
                            <button
                                onClick={closeModal}
                                className="bg-red-500 text-white px-4 py-2 rounded shadow hover:bg-red-400 ml-2"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
