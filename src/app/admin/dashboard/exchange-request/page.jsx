
'use client'


import React, { useState } from 'react';
import { EditIcon, TrashIcon } from 'lucide-react';

const demoRequests = [
    { id: 1, username: 'User1', exchangeID: 'EX123', amount: 100, time: '2023-10-01', status: 'pending', sendingMethod: 'Web Money', receivingMethod: 'Bkash', receiveID: 'BK123' },
    { id: 2, username: 'User2', exchangeID: 'EX124', amount: 200, time: '2023-10-02', status: 'processing', sendingMethod: 'Bkash', receivingMethod: 'Payeer', receiveID: 'PY124' },
    { id: 3, username: 'User3', exchangeID: 'EX125', amount: 150, time: '2023-10-03', status: 'success', sendingMethod: 'Payeer', receivingMethod: 'Web Money', receiveID: 'WM125' },
    { id: 4, username: 'User4', exchangeID: 'EX126', amount: 300, time: '2023-10-04', status: 'pending', sendingMethod: 'Web Money', receivingMethod: 'Bkash', receiveID: 'BK126' },
    { id: 5, username: 'User5', exchangeID: 'EX127', amount: 250, time: '2023-10-05', status: 'processing', sendingMethod: 'Bkash', receivingMethod: 'Payeer', receiveID: 'PY127' },
    { id: 6, username: 'User6', exchangeID: 'EX128', amount: 400, time: '2023-10-06', status: 'success', sendingMethod: 'Payeer', receivingMethod: 'Web Money', receiveID: 'WM128' },
    { id: 7, username: 'User7', exchangeID: 'EX129', amount: 500, time: '2023-10-07', status: 'pending', sendingMethod: 'Web Money', receivingMethod: 'Bkash', receiveID: 'BK129' },
    { id: 8, username: 'User8', exchangeID: 'EX130', amount: 600, time: '2023-10-08', status: 'processing', sendingMethod: 'Bkash', receivingMethod: 'Payeer', receiveID: 'PY130' },
    { id: 9, username: 'User9', exchangeID: 'EX131', amount: 700, time: '2023-10-09', status: 'success', sendingMethod: 'Payeer', receivingMethod: 'Web Money', receiveID: 'WM131' },
    { id: 10, username: 'User10', exchangeID: 'EX132', amount: 800, time: '2023-10-10', status: 'pending', sendingMethod: 'Web Money', receivingMethod: 'Bkash', receiveID: 'BK132' },
];

export default function ExchangeRequestPage() {
    const [requests, setRequests] = useState(demoRequests);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentRequest, setCurrentRequest] = useState(null);
    const [filteredRequests, setFilteredRequests] = useState(requests.filter(req => req.status === 'pending'));
    const [filter, setFilter] = useState('pending');

    const handleEdit = (request) => {
        setCurrentRequest(request);
        setIsModalOpen(true);
    };

    const handleSave = () => {
        if (currentRequest) {
            const updatedRequests = requests.map(request => 
                request.id === currentRequest.id 
                ? { ...request, status: currentRequest.status, sendingMethod: currentRequest.sendingMethod, receivingMethod: currentRequest.receivingMethod, receiveID: currentRequest.receiveID } 
                : request
            );
            setRequests(updatedRequests);
            setFilteredRequests(updatedRequests.filter(req => filter === 'all' || req.status === filter));
            closeModal();
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setCurrentRequest(null);
    };

    const handleFilterChange = (status) => {
        setFilter(status);
        setFilteredRequests(requests.filter(req => status === 'all' || req.status === status));
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Exchange Requests</h1>
            <div className="mb-4">
                <button onClick={() => handleFilterChange('pending')} className="bg-blue-500 text-white px-4 py-2 rounded mr-2">Pending</button>
                <button onClick={() => handleFilterChange('processing')} className="bg-yellow-500 text-white px-4 py-2 rounded mr-2">Processing</button>
                <button onClick={() => handleFilterChange('success')} className="bg-green-500 text-white px-4 py-2 rounded">Success</button>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b">Username</th>
                            <th className="py-2 px-4 border-b">Exchange ID</th>
                            <th className="py-2 px-4 border-b">Amount</th>
                            <th className="py-2 px-4 border-b">Time</th>
                            <th className="py-2 px-4 border-b">Status</th>
                            <th className="py-2 px-4 border-b">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredRequests.map(request => (
                            <tr key={request.id}>
                                <td className="py-2 px-4 border-b">{request.username}</td>
                                <td className="py-2 px-4 border-b">{request.exchangeID}</td>
                                <td className="py-2 px-4 border-b">{request.amount}</td>
                                <td className="py-2 px-4 border-b">{request.time}</td>
                                <td className="py-2 px-4 border-b">{request.status}</td>
                                <td className="py-2 px-4 border-b flex items-center gap-4">
                                    <EditIcon onClick={() => handleEdit(request)} className="text-blue-600 cursor-pointer" size={20} />
                                    <TrashIcon className="text-red-600 cursor-pointer" size={20} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {isModalOpen && currentRequest && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded shadow-lg w-96">
                        <h2 className="text-lg font-bold mb-4">Edit Request</h2>
                        <p><strong>Username:</strong> {currentRequest.username}</p>
                        <p><strong>Exchange ID:</strong> {currentRequest.exchangeID}</p>
                        <p><strong>Amount:</strong> {currentRequest.amount}</p>
                        <p><strong>Time:</strong> {currentRequest.time}</p>
                        <p><strong>Sending Method:</strong> {currentRequest.sendingMethod}</p>
                        <p><strong>Receiving Method:</strong> {currentRequest.receivingMethod}</p>
                        <p><strong>Receive ID:</strong> {currentRequest.receiveID}</p>
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
