'use client'

import React, { useState } from 'react';
import { UserIcon, EditIcon, TrashIcon } from 'lucide-react';

const demoFeedbacks = [
    { id: 1, username: 'User1', message: 'Great service!', rating: 5, date: new Date('2023-10-01') },
    { id: 2, username: 'User2', message: 'Very helpful support.', rating: 4, date: new Date('2023-10-02') },
    { id: 3, username: 'User3', message: 'Satisfactory experience.', rating: 3, date: new Date('2023-10-03') },
    { id: 4, username: 'User4', message: 'Could be better.', rating: 2, date: new Date('2023-10-04') },
    { id: 5, username: 'User5', message: 'Not satisfied with the service.', rating: 1, date: new Date('2023-10-05') },
];

export default function FeedbackPage() {
    const [feedbacks, setFeedbacks] = useState(demoFeedbacks.sort((a, b) => b.date - a.date));
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentFeedback, setCurrentFeedback] = useState(null);
    const [editedMessage, setEditedMessage] = useState('');
    const [editedRating, setEditedRating] = useState(0);

    const handleEdit = (feedback) => {
        setCurrentFeedback(feedback);
        setEditedMessage(feedback.message);
        setEditedRating(feedback.rating);
        setIsModalOpen(true);
    };

    const handleDelete = (id) => {
        setFeedbacks(feedbacks.filter(feedback => feedback.id !== id));
    };

    const handleSave = () => {
        if (currentFeedback) {
            const updatedFeedbacks = feedbacks.map(feedback => 
                feedback.id === currentFeedback.id 
                ? { ...feedback, message: editedMessage, rating: editedRating } 
                : feedback
            );
            setFeedbacks(updatedFeedbacks);
            closeModal();
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setCurrentFeedback(null);
        setEditedMessage('');
        setEditedRating(0);
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Feedbacks</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {feedbacks.map(feedback => (
                    <div key={feedback.id} className="bg-white p-4 rounded-lg shadow-md">
                        <div className="flex items-center mb-2">
                            <UserIcon size={24} className="text-gray-500 mr-2" />
                            <span className="font-semibold">{feedback.username}</span>
                        </div>
                        <p className="text-gray-700 mb-2">{feedback.message}</p>
                        <div className="flex items-center mb-2">
                            <span className="text-yellow-500">{'★'.repeat(feedback.rating)}</span>
                            <span className="text-gray-500 ml-2">{feedback.rating} / 5</span>
                        </div>
                        <p className="text-gray-500 mb-2">{feedback.date.toLocaleDateString()}</p>
                        <div className="flex justify-between">
                            <EditIcon onClick={() => handleEdit(feedback)} className="text-blue-600 cursor-pointer" size={20} />
                            <TrashIcon onClick={() => handleDelete(feedback.id)} className="text-red-600 cursor-pointer" size={20} />
                        </div>
                    </div>
                ))}
            </div>

            {isModalOpen && currentFeedback && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded shadow-lg w-96">
                        <h2 className="text-lg font-bold mb-4">Edit Feedback</h2>
                        <p><strong>User:</strong> {currentFeedback.username}</p>
                        <textarea 
                            value={editedMessage} 
                            onChange={(e) => setEditedMessage(e.target.value)} 
                            className="mb-2 w-full p-2 border rounded" 
                            placeholder="Edit message"
                        />
                        <input 
                            type="number" 
                            value={editedRating} 
                            onChange={(e) => setEditedRating(Number(e.target.value))} 
                            className="mb-2 w-full p-2 border rounded" 
                            placeholder="Edit rating (1-5)"
                            min="1"
                            max="5"
                        />
                        <p><strong>Date:</strong> {currentFeedback.date.toLocaleDateString()}</p>
                        <div className="flex justify-end mt-4">
                            <button onClick={handleSave} className="bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-400">
                                Save
                            </button>
                            <button onClick={closeModal} className="bg-red-500 text-white px-4 py-2 rounded shadow hover:bg-red-400 ml-2">
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
